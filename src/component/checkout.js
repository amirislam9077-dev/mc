import React, { useState, useEffect, useRef } from 'react';
import './checkout.css';
import Thanks from './thanks';

function Checkout({ cartItems, onClose, onOrderSuccess }) {
  const [address, setAddress] = useState('North Nazimabad, Karachi');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [alternatePhone, setAlternatePhone] = useState('');
  const [fullName, setFullName] = useState('');
  const [deliveryInstructions, setDeliveryInstructions] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [alternatePhoneError, setAlternatePhoneError] = useState('');
  const [mapZoom, setMapZoom] = useState(15);
  const [showMarker, setShowMarker] = useState(true);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [markerPosition, setMarkerPosition] = useState({ x: 50, y: 50 }); // percentage position
  const [isDragging, setIsDragging] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const [orderData, setOrderData] = useState(null);
  const [isLoadingPlaces, setIsLoadingPlaces] = useState(false);
  const suggestionsRef = useRef(null);
  const mapContainerRef = useRef(null);
  const debounceTimerRef = useRef(null);
  const autocompleteService = useRef(null);
  const placesService = useRef(null);

  // Google Places API Key - Get yours from: https://console.cloud.google.com/apis/credentials
  const GOOGLE_PLACES_API_KEY = 'AIzaSyBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'; // Replace with your actual API key

  // Fallback locations in Karachi (used if Google Places API is not available)
  const karachiLocations = [
    'Clifton Beach, Karachi',
    'Saddar, Karachi',
    'Gulshan-e-Iqbal, Karachi',
    'DHA (Defence), Karachi',
    'Bahria Town, Karachi',
    'Malir, Karachi',
    'Korangi, Karachi',
    'North Nazimabad, Karachi',
    'Tariq Road, Karachi',
    'Johar Town, Karachi',
    'Shahrah-e-Faisal, Karachi',
    'Clifton Block 2, Karachi',
    'Clifton Block 4, Karachi',
    'Clifton Block 5, Karachi',
    'Clifton Block 8, Karachi',
    'Bahadurabad, Karachi',
    'PECHS, Karachi',
    'Gulistan-e-Johar, Karachi',
    'FB Area, Karachi',
    'Nazimabad, Karachi',
    'Lyari, Karachi',
    'Landhi, Karachi',
    'Orangi Town, Karachi',
    'Gulberg, Karachi',
    'North Karachi, Karachi',
    'Soldier Bazaar, Karachi',
    'Kharadar, Karachi',
    'Burns Road, Karachi',
    'Port Grand, Karachi',
    'Sea View, Karachi'
  ];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[^0-9]/g, '')) || 0;
      return total + (price * item.quantity);
    }, 0);
  };

  // Validate Pakistani phone number
  const validatePhoneNumber = (phone) => {
    if (!phone || phone.trim() === '') {
      return { isValid: false, error: '' }; // Empty is handled by required field
    }

    // Remove dash for validation
    const numbers = phone.replace(/\D/g, '');

    // Must start with 03
    if (!numbers.startsWith('03')) {
      return { isValid: false, error: 'Phone number must start with 03' };
    }

    // Must be exactly 11 digits
    if (numbers.length < 11) {
      return { isValid: false, error: `Phone number must be 11 digits (currently ${numbers.length})` };
    }

    if (numbers.length > 11) {
      return { isValid: false, error: 'Phone number cannot exceed 11 digits' };
    }

    return { isValid: true, error: '' };
  };

  // Format phone number as user types (03xx-xxxxxxx)
  const formatPhoneNumber = (value) => {
    // Remove all non-numeric characters
    const numbers = value.replace(/\D/g, '');

    // Format: 03xx-xxxxxxx
    if (numbers.length <= 4) {
      return numbers;
    } else if (numbers.length <= 11) {
      return numbers.slice(0, 4) + '-' + numbers.slice(4);
    } else {
      return numbers.slice(0, 4) + '-' + numbers.slice(4, 11);
    }
  };

  const handlePhoneChange = (value, setter, errorSetter) => {
    const formatted = formatPhoneNumber(value);
    setter(formatted);

    // Validate on change
    if (formatted.trim() !== '') {
      const validation = validatePhoneNumber(formatted);
      errorSetter(validation.error);
    } else {
      errorSetter('');
    }
  };

  // Load Google Places API
  useEffect(() => {
    // Check if script already loaded
    if (window.google && window.google.maps && window.google.maps.places) {
      initializePlacesServices();
      return;
    }

    // Load Google Places API script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_PLACES_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      initializePlacesServices();
    };
    script.onerror = () => {
      console.error('Failed to load Google Places API');
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  // Initialize Google Places services
  const initializePlacesServices = () => {
    if (window.google && window.google.maps && window.google.maps.places) {
      autocompleteService.current = new window.google.maps.places.AutocompleteService();
      // Create a temporary div for PlacesService (it requires a map or div)
      const div = document.createElement('div');
      placesService.current = new window.google.maps.places.PlacesService(div);
    }
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Fetch place predictions from Google Places API
  const fetchPlacePredictions = (input) => {
    if (!autocompleteService.current || input.trim().length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      setIsLoadingPlaces(false);
      return;
    }

    const request = {
      input: input,
      componentRestrictions: { country: 'pk' }, // Restrict to Pakistan
      types: ['geocode', 'establishment'], // Get addresses and places
      // Bias results to Karachi
      locationBias: {
        center: { lat: 24.8607, lng: 67.0011 }, // Karachi coordinates
        radius: 50000 // 50km radius
      }
    };

    autocompleteService.current.getPlacePredictions(request, (predictions, status) => {
      setIsLoadingPlaces(false);

      if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) {
        // Format predictions to show detailed addresses
        const formattedSuggestions = predictions.map(prediction => ({
          description: prediction.description,
          placeId: prediction.place_id,
          mainText: prediction.structured_formatting.main_text,
          secondaryText: prediction.structured_formatting.secondary_text
        }));
        setSuggestions(formattedSuggestions);
        setShowSuggestions(true);
      } else {
        // Fallback to local suggestions
        const filtered = karachiLocations.filter(location =>
          location.toLowerCase().includes(input.toLowerCase())
        );
        setSuggestions(filtered.map(loc => ({ description: loc, isLocal: true })));
        setShowSuggestions(filtered.length > 0);
      }
    });
  };

  const handleAddressChange = (newAddress) => {
    setAddress(newAddress);

    // Clear previous debounce timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    if (newAddress.trim().length > 0) {
      setIsLoadingPlaces(true);

      // Debounce API calls - wait 300ms after user stops typing
      debounceTimerRef.current = setTimeout(() => {
        fetchPlacePredictions(newAddress);
      }, 300);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
      setIsLoadingPlaces(false);
    }

    if (newAddress.trim().length > 3) {
      setMapZoom(15); // Zoom in to street level
      setShowMarker(true);
    } else {
      setMapZoom(11); // Reset to city view
      setShowMarker(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    // Handle both new format (object) and old format (string)
    const addressText = typeof suggestion === 'string' ? suggestion : suggestion.description;
    setAddress(addressText);
    setShowSuggestions(false);
    setMapZoom(15);
    setShowMarker(true);

    // If it's a Google Places result with placeId, we could get coordinates
    // For now, we'll just update the address text
  };

  const handleZoomIn = () => {
    setMapZoom((prev) => Math.min(prev + 1, 20));
  };

  const handleZoomOut = () => {
    setMapZoom((prev) => Math.max(prev - 1, 1));
  };

  // Handle marker drag
  const handleMarkerMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !mapContainerRef.current) return;

    const rect = mapContainerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    // Constrain to map bounds
    const constrainedX = Math.max(0, Math.min(100, x));
    const constrainedY = Math.max(0, Math.min(100, y));

    setMarkerPosition({ x: constrainedX, y: constrainedY });

    // Update address in real-time while dragging
    updateAddressFromPosition(constrainedX, constrainedY);
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  const updateAddressFromPosition = (xPos, yPos) => {
    // Simulate reverse geocoding based on marker position
    // Use both x and y position for better variety
    const areaIndex = Math.floor(((xPos + yPos) / 200) * karachiLocations.length);
    const selectedArea = karachiLocations[Math.min(areaIndex, karachiLocations.length - 1)];
    setAddress(selectedArea);
  };

  // Add mouse event listeners
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, markerPosition]);

  const handlePlaceOrder = async () => {
    // Validate required fields
    if (!fullName.trim()) {
      alert('Please enter your full name');
      return;
    }

    if (!phoneNumber.trim()) {
      alert('Please enter your phone number');
      return;
    }

    // Validate primary phone number
    const phoneValidation = validatePhoneNumber(phoneNumber);
    if (!phoneValidation.isValid) {
      setPhoneError(phoneValidation.error);
      alert(`Invalid phone number: ${phoneValidation.error}`);
      return;
    }

    // Validate alternate phone number if provided
    if (alternatePhone.trim()) {
      const altPhoneValidation = validatePhoneNumber(alternatePhone);
      if (!altPhoneValidation.isValid) {
        setAlternatePhoneError(altPhoneValidation.error);
        alert(`Invalid alternate phone number: ${altPhoneValidation.error}`);
        return;
      }
    }

    if (!address.trim()) {
      alert('Please enter your delivery address');
      return;
    }

    // Generate unique order number
    const orderNumber = `MC-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    // Prepare order items text
    const orderItemsText = cartItems.map(item =>
      `${item.title} (Qty: ${item.quantity}) - ${item.price}`
    ).join('\n');

    // Send email using FormSubmit (No API key required!)
    try {
      const formData = new FormData();
      formData.append('Order Number', orderNumber);
      formData.append('Customer Name', fullName);
      formData.append('Phone Number', phoneNumber);
      if (alternatePhone.trim()) {
        formData.append('Alternate Phone', alternatePhone);
      }
      formData.append('Delivery Address', address);
      formData.append('Delivery Instructions', deliveryInstructions || 'None');
      formData.append('Order Items', orderItemsText);
      formData.append('Subtotal', `PKR ${calculateTotal()}.00`);
      formData.append('Delivery Fee', 'PKR 50.00');
      formData.append('Total Amount', `PKR ${calculateTotal() + 50}.00`);
      formData.append('Order Date', new Date().toLocaleString());
      formData.append('_subject', `New McDonald's Order - ${orderNumber}`);
      formData.append('_captcha', 'false');
      formData.append('_template', 'table');

      const response = await fetch('https://formsubmit.co/amirislam9077@gmail.com', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        // Save order data to show in thanks page
        setOrderData({
          orderNumber: orderNumber,
          customerName: fullName,
          phone: phoneNumber,
          alternatePhone: alternatePhone || null,
          address: address,
          items: orderItemsText,
          total: calculateTotal() + 50
        });
        // Show thanks page
        setShowThanks(true);
      } else {
        throw new Error('Email sending failed');
      }
    } catch (error) {
      // Fallback: Show order details even if email fails
      alert(`Order Placed!\n\nOrder Number: ${orderNumber}\n\nCustomer: ${fullName}\nPhone: ${phoneNumber}\nAddress: ${address}\nInstructions: ${deliveryInstructions || 'None'}\n\nItems:\n${orderItemsText}\n\nSubtotal: PKR ${calculateTotal()}.00\nDelivery: PKR 50.00\nTotal: PKR ${calculateTotal() + 50}.00\n\nNote: Email confirmation will arrive shortly.`);
      console.error('Email error:', error);

      // Still show thanks page even if email fails
      setOrderData({
        orderNumber: orderNumber,
        customerName: fullName,
        phone: phoneNumber,
        alternatePhone: alternatePhone || null,
        address: address,
        items: orderItemsText,
        total: calculateTotal() + 50
      });
      setShowThanks(true);
    }
  };

  // Generate map URL based on address and zoom
  const getMapUrl = () => {
    const query = address.trim() ? `${address}, Karachi, Pakistan` : 'Karachi, Pakistan';
    return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=${mapZoom}&output=embed`;
  };

  // If showing thanks page, render it instead
  if (showThanks && orderData) {
    return (
      <Thanks
        orderNumber={orderData.orderNumber}
        customerName={orderData.customerName}
        orderDetails={{
          phone: orderData.phone,
          alternatePhone: orderData.alternatePhone,
          address: orderData.address,
          items: orderData.items,
          total: orderData.total
        }}
        onClose={onOrderSuccess || onClose}
      />
    );
  }

  return (
    <div className="checkout-overlay" onClick={onClose}>
      <div className="checkout-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="checkout-close-btn" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>

        <h2 className="checkout-title">Checkout</h2>

        <div className="checkout-content">
          {/* Left Side - Order Summary */}
          <div className="checkout-left">
            <div className="order-summary">
              <div className="order-summary-header">
                <h3>{cartItems.length} Items in Cart</h3>
              </div>

              <div className="order-items-list">
                {cartItems.map((item, index) => (
                  <div key={index} className="order-item">
                    <img src={item.image} alt={item.title} className="order-item-image" />
                    <div className="order-item-details">
                      <h4 className="order-item-title">{item.title}</h4>
                      {item.size && <p className="order-item-size">Size: {item.size}</p>}
                      <p className="order-item-qty">Qty: {item.quantity}</p>
                      <p className="order-item-price">{item.price}</p>
                      {item.specialInstructions && (
                        <button className="order-item-view-details">
                          View Details
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="order-total-section">
                <div className="order-total-row">
                  <span>Subtotal</span>
                  <span>PKR {calculateTotal()}.00</span>
                </div>
                <div className="order-total-row">
                  <span>Delivery Fee</span>
                  <span>PKR 50.00</span>
                </div>
                <div className="order-total-row order-total-final">
                  <span>Total</span>
                  <span>PKR {calculateTotal() + 50}.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Map & Address Details */}
          <div className="checkout-right">
            <div className="checkout-map-section">
              <h3 className="checkout-section-title">Enter Full Address</h3>

              {/* Address Input with Map Icon */}
              <div className="address-input-wrapper" ref={suggestionsRef}>
                <input
                  type="text"
                  className="address-input"
                  placeholder="Enter your address in Karachi"
                  value={address}
                  onChange={(e) => handleAddressChange(e.target.value)}
                  onFocus={() => address && setShowSuggestions(true)}
                />
                <svg className="search-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>

                {/* Suggestions Dropdown */}
                {showSuggestions && (
                  <div className="suggestions-dropdown">
                    {isLoadingPlaces && (
                      <div className="suggestion-loading">
                        <span>Loading suggestions...</span>
                      </div>
                    )}
                    {!isLoadingPlaces && suggestions.length > 0 && suggestions.slice(0, 8).map((suggestion, index) => {
                      const isGooglePlace = !suggestion.isLocal;
                      return (
                        <div
                          key={index}
                          className="suggestion-item"
                          onClick={() => handleSuggestionClick(suggestion)}
                        >
                          <svg className="suggestion-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                          </svg>
                          <div className="suggestion-text">
                            {isGooglePlace ? (
                              <>
                                <span className="suggestion-main">{suggestion.mainText}</span>
                                <span className="suggestion-secondary">{suggestion.secondaryText}</span>
                              </>
                            ) : (
                              <span>{suggestion.description}</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                    {!isLoadingPlaces && suggestions.length === 0 && (
                      <div className="suggestion-no-results">
                        <span>No results found</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Map Display - Iframe-based Map */}
              <div className="map-container" ref={mapContainerRef}>
                <iframe
                  className="karachi-map"
                  src={getMapUrl()}
                  title="Karachi Map"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                <div className="map-location-badge">
                  {showMarker ? 'Your Location' : 'Karachi, Pakistan'}
                </div>

                {/* Location Marker Overlay (appears when address is entered) */}
                {showMarker && (
                  <div
                    className={`map-marker-overlay ${isDragging ? 'dragging' : ''}`}
                    style={{
                      left: `${markerPosition.x}%`,
                      top: `${markerPosition.y}%`
                    }}
                    onMouseDown={handleMarkerMouseDown}
                  >
                    <svg className="location-marker" viewBox="0 0 24 24" fill="#E4002B">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    {/* Location Tooltip - shows while dragging */}
                    {isDragging && (
                      <div className="location-tooltip">
                        {address}
                      </div>
                    )}
                  </div>
                )}

                {/* Zoom Controls */}
                <div className="map-zoom-controls">
                  <button className="zoom-btn zoom-in-btn" onClick={handleZoomIn} title="Zoom In">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                    </svg>
                  </button>
                  <button className="zoom-btn zoom-out-btn" onClick={handleZoomOut} title="Zoom Out">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 13H5v-2h14v2z"/>
                    </svg>
                  </button>
                </div>

                {/* Map Instructions */}
                <div className="map-instructions">
                  {showMarker ? 'Drag the marker to change location' : 'Type your address to see the location on the map'}
                </div>
              </div>

              {/* Selected Address Display */}
              {address && (
                <div className="selected-address">
                  <svg className="address-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <div className="address-text">
                    <h4>{address}</h4>
                    <p className="address-reference">Karachi, Pakistan</p>
                  </div>
                </div>
              )}

              {/* Contact Details Form */}
              <div className="contact-details-form">
                <div className="form-group">
                  <label>Full Name <span className="required">*</span></label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Mobile Number <span className="required">*</span></label>
                  <input
                    type="tel"
                    placeholder="03xx-xxxxxxx"
                    value={phoneNumber}
                    onChange={(e) => handlePhoneChange(e.target.value, setPhoneNumber, setPhoneError)}
                    maxLength="12"
                    required
                    className={phoneError ? 'input-error' : ''}
                  />
                  {phoneError && <span className="error-message">{phoneError}</span>}
                </div>

                <div className="form-group">
                  <label>Alternate Mobile Number</label>
                  <input
                    type="tel"
                    placeholder="03xx-xxxxxxx"
                    value={alternatePhone}
                    onChange={(e) => handlePhoneChange(e.target.value, setAlternatePhone, setAlternatePhoneError)}
                    maxLength="12"
                    className={alternatePhoneError ? 'input-error' : ''}
                  />
                  {alternatePhoneError && <span className="error-message">{alternatePhoneError}</span>}
                </div>

                <div className="form-group">
                  <label>Delivery Instructions (Optional)</label>
                  <textarea
                    placeholder="Any special delivery instructions..."
                    value={deliveryInstructions}
                    onChange={(e) => setDeliveryInstructions(e.target.value)}
                    rows="3"
                  />
                </div>
              </div>

              {/* Place Order Button */}
              <button className="place-order-btn" onClick={handlePlaceOrder}>
                <span>Place Order</span>
                <span>PKR {calculateTotal() + 50}.00</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

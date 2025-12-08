# Google Places API Setup Instructions

## Overview

The checkout page now uses **Google Places Autocomplete API** to show real, detailed addresses when customers type their delivery location. Instead of static location suggestions, it will show actual addresses like:

- **Jansher Khan Road**, Karachi Division, Sindh, Pakistan
- **F64/1 Jansher Khan Road**, North Nazimabad Block F, Karachi
- **DHA Phase 5**, Defence Housing Authority, Karachi

## What Was Implemented

✅ Google Places Autocomplete API integration
✅ Real-time address suggestions with debouncing (300ms delay)
✅ Detailed address format showing:
  - Main text (road/area name)
  - Secondary text (city, division, country)
✅ Loading indicator while fetching suggestions
✅ Fallback to local Karachi locations if API fails
✅ Biased search results to Karachi area (50km radius)
✅ Restricted to Pakistan addresses only

## How to Get Your Google Places API Key (FREE)

### Step 1: Create Google Cloud Project

1. Go to **Google Cloud Console**: https://console.cloud.google.com/
2. Sign in with your Google account
3. Click **"Select a project"** at the top
4. Click **"New Project"**
5. Enter project name: `"McDonalds-Delivery-App"`
6. Click **"Create"**

### Step 2: Enable Google Places API

1. In your project, go to **"APIs & Services"** → **"Library"**
2. Search for **"Places API"**
3. Click on **"Places API"**
4. Click **"Enable"**

### Step 3: Create API Key

1. Go to **"APIs & Services"** → **"Credentials"**
2. Click **"+ Create Credentials"** at the top
3. Select **"API Key"**
4. Your API key will be generated (looks like: `AIzaSyAbCdEfGhIjKlMnOpQrStUvWxYz1234567`)
5. **IMPORTANT**: Click **"Restrict Key"** for security

### Step 4: Restrict API Key (Security)

1. In the API key settings, under **"API restrictions"**:
   - Select **"Restrict key"**
   - Check **"Places API"**
   - Click **"Save"**

2. Under **"Application restrictions"** (Optional but recommended):
   - Select **"HTTP referrers (web sites)"**
   - Add your domains:
     - `http://localhost:3000/*` (for development)
     - `https://yourdomain.com/*` (for production)
   - Click **"Save"**

### Step 5: Update Your Code

Open `src/component/checkout.js` and find line 26:

```javascript
const GOOGLE_PLACES_API_KEY = 'AIzaSyBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
```

Replace it with your actual API key:

```javascript
const GOOGLE_PLACES_API_KEY = 'AIzaSyAbCdEfGhIjKlMnOpQrStUvWxYz1234567'; // Your real key
```

### Step 6: Test the Feature

1. Start your React app: `npm start`
2. Add items to cart
3. Go to checkout
4. Click on the address input field
5. Type any address in Karachi (e.g., "Jansher Khan")
6. You should see **detailed, real addresses** appear in the dropdown!

## Pricing (FREE Tier)

Google Places API offers a **FREE tier**:

- **$200 free credit per month** (automatically applied)
- **Autocomplete** costs: **$2.83 per 1,000 requests**
- With $200 credit = **~70,000 free autocomplete requests/month**
- For a food delivery site, this is more than enough!

**Example**: If you get 1,000 orders/month and each customer types 5 addresses = 5,000 requests = **$14.15** → **FREE** (covered by $200 credit)

## Features of the Implementation

### 1. **Detailed Address Display**
Shows addresses in two parts:
- **Main text** (bold): Street name, area, or landmark
- **Secondary text** (smaller, gray): City, division, country

### 2. **Smart Search**
- Biased to Karachi (prioritizes Karachi results)
- Restricted to Pakistan only
- Minimum 2 characters before searching
- Debounced (waits 300ms after typing stops)

### 3. **Fallback System**
If Google Places API fails or isn't configured:
- Automatically falls back to local Karachi locations
- Still provides 30 popular Karachi areas
- No error shown to customers

### 4. **Loading Indicator**
- Shows "Loading suggestions..." while fetching
- Shows "No results found" if no matches

## Troubleshooting

### Problem: "Loading suggestions..." but no results

**Solution**: Check your API key:
1. Make sure it's enabled in Google Cloud Console
2. Make sure Places API is enabled for your project
3. Check browser console for errors (F12)

### Problem: Getting "REQUEST_DENIED" error

**Solution**:
1. Check if Places API is enabled in Google Cloud Console
2. Verify your API key restrictions allow your domain
3. Make sure you copied the key correctly (no extra spaces)

### Problem: Still seeing basic locations (not detailed addresses)

**Solution**:
1. Hard refresh your browser (Ctrl + Shift + R)
2. Clear browser cache
3. Check if API key is correctly pasted in checkout.js line 26

## Alternative: Keep Using Local Locations

If you don't want to use Google Places API, the app will automatically use the fallback local Karachi locations. Just keep the placeholder API key as is:

```javascript
const GOOGLE_PLACES_API_KEY = 'AIzaSyBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
```

The app will detect it's invalid and use local suggestions instead.

## Security Best Practices

1. **Never commit API keys to public repositories**
   - Consider using environment variables: `process.env.REACT_APP_GOOGLE_PLACES_KEY`

2. **Always restrict your API key**
   - Restrict to Places API only
   - Restrict to your domain(s)

3. **Monitor usage**
   - Check Google Cloud Console regularly
   - Set up billing alerts

## Support

If you need help setting this up, let me know! The implementation is complete and ready to work once you add your API key.

---

**Summary**: Add your Google Places API key to line 26 of `src/component/checkout.js` and customers will see detailed, real addresses instead of basic location names!

import './App.css';
import React, { useState } from 'react';
import Header from './component/header';
import Slider from './component/slider';
import Product from './component/product';
import Popular from './component/popular';
import PopularPro from './component/popularpro';
import Burger from './component/burger';
import BurgerPro from './component/burgerpro';
import Night from './component/night';
import NightPro from './component/nightpro';
import Function from './component/function';
import FunctionPro from './component/functionpro';
import Family from './component/family';
import FamilyPro from './component/familypro';
import Ice from './component/ice';
import IcePro from './component/icepro';
import Footer from './component/footer';
import Cart from './component/cart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQuantity;
    setCartItems(updatedCart);
  };

  const handleRemoveItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="App">
      <Header />
      <Slider />
      <Product />
      <Popular />
      <PopularPro onAddToCart={handleAddToCart} />
      <Burger />
      <BurgerPro onAddToCart={handleAddToCart} />
      <Night />
      <NightPro onAddToCart={handleAddToCart} />
      <Function />
      <FunctionPro onAddToCart={handleAddToCart} />
      <Family />
      <FamilyPro onAddToCart={handleAddToCart} />
      <Ice />
      <IcePro onAddToCart={handleAddToCart} />
      <Footer />

      <Cart
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </div>
  );
}

export default App;

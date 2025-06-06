import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { WishlistProvider } from './contexts/WishlistContext';
import { AdminProvider } from './contexts/AdminContext';
import Layout from './components/layout/Layout';
import Home from './components/layout/Home';
import Products from './components/products/Products';
import ProductDetail from './components/products/ProductDetail';
import Cart from './components/cart/Cart';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Wishlist from './components/wishlist/Wishlist';
import AdminDashboard from './components/admin/AdminDashboard';
import OrderConfirmation from './components/order/OrderConfirmation';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);

  const addToCart = (product) => {
    setCartItems(prev => [...prev, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateCartQuantity = (productId, quantity) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AdminProvider>
      <WishlistProvider>
          <Layout user={user} onLogout={logout}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products addToCart={addToCart} />} />
              <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
              <Route path="/cart" element={<Cart 
                cartItems={cartItems} 
                removeFromCart={removeFromCart}
                updateCartQuantity={updateCartQuantity}
              />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/order/:orderId" element={<OrderConfirmation />} />
              <Route path="/login" element={<Login onLogin={login} user={user} />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </Layout>
        </WishlistProvider>
      </AdminProvider>
  );
}

export default App;

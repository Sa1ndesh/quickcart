import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart, updateCartQuantity }) => {
  const [isCheckout, setIsCheckout] = useState(false);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
  };

  const handleCheckout = () => {
    setIsCheckout(true);
    // In a real app, this would trigger the checkout process
    setTimeout(() => {
      alert('Thank you for your order!');
      removeFromCart(cartItems[0].id); // Clear cart after checkout
      setIsCheckout(false);
    }, 1000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link
          to="/products"
          className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      
      <div className="space-y-4">
        {cartItems.map((item, index) => (
          <div key={`${item.id}-${index}`} className="bg-white rounded-lg shadow-md p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <button
                    onClick={() => updateCartQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))}
                    className="px-2 py-1 bg-gray-200 rounded-l-md hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border-t border-b border-gray-200">
                    {item.quantity || 1}
                  </span>
                  <button
                    onClick={() => updateCartQuantity(item.id, (item.quantity || 1) + 1)}
                    className="px-2 py-1 bg-gray-200 rounded-r-md hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Total:</h3>
          <p className="text-lg font-semibold">${calculateTotal().toFixed(2)}</p>
        </div>
        
        <div className="flex justify-between items-center">
          <Link
            to="/products"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 transition-colors"
          >
            Continue Shopping
          </Link>
          <button
            onClick={handleCheckout}
            disabled={isCheckout}
            className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50"
          >
            {isCheckout ? 'Processing...' : 'Checkout'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

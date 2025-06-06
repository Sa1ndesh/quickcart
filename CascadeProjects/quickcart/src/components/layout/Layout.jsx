import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Layout = ({ children, user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold text-indigo-600">QuickCart</span>
              </Link>
              <div className="hidden md:flex space-x-8 ml-10">
                <Link to="/products" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Products
                </Link>
                <Link to="/wishlist" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Wishlist
                </Link>
                <Link to="/cart" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Cart
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              {user ? (
                <div className="flex space-x-4">
                  <span className="text-gray-700">Welcome, {user.name}</span>
                  <button
                    onClick={onLogout}
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex space-x-4">
                  <Link to="/login" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                    Login
                  </Link>
                  <Link to="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                    Sign Up
                  </Link>
                </div>
              )}
              <button
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex space-x-4">
              <Link to="/products" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900">
                Products
              </Link>
              <Link to="/wishlist" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900">
                Wishlist
              </Link>
              <Link to="/cart" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900">
                Cart
              </Link>
              {user ? (
                <button
                  onClick={onLogout}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-900"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900">
                    Login
                  </Link>
                  <Link to="/signup" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
      <main className="max-w-7xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;

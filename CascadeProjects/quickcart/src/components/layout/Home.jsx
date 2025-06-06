import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative">
      {/* Hero section */}
      <div className="relative h-96 bg-indigo-600">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522092970495-d15687d89596?ixlib=rb-4.0.3"
            alt="Shopping"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-white">
          <div className="pt-32">
            <h1 className="text-5xl font-bold mb-4">Welcome to QuickCart</h1>
            <p className="text-xl mb-8">Discover amazing products at great prices</p>
            <Link
              to="/products"
              className="bg-white text-indigo-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Featured products */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sample featured products - will be replaced with actual products */}
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Sample Product</h3>
                <p className="text-gray-600 mb-4">$99.99</p>
                <Link
                  to="/products"
                  className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

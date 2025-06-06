import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useWishlist } from "../../contexts/WishlistContext";

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const [quantity, setQuantity] = useState(1);
  const { addToWishlist, isInWishlist } = useWishlist();

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="aspect-w-1 aspect-h-1 bg-gray-200">
          <img
            src={`${product.image}.jpg`}
            alt={product.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to a placeholder image if the main image fails to load
              e.target.src = 'https://placehold.co/600x400/cccccc/999999?text=No+Image';
            }}
          />
        </div>
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold text-gray-900 mb-4">
            ${product.price.toFixed(2)}
          </p>
          <div className="space-y-4 mb-6">
            <p className="text-gray-600">{product.description}</p>
            <p className="text-sm text-gray-500">Stock: {product.stock}</p>
          </div>
          
          <div className="flex items-center mb-4">
            <button
              onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
              className="px-4 py-2 bg-gray-200 rounded-l-md hover:bg-gray-300"
            >
              -
            </button>
            <span className="px-4 py-2 border-t border-b border-gray-200">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(prev => prev + 1)}
              className="px-4 py-2 bg-gray-200 rounded-r-md hover:bg-gray-300"
            >
              +
            </button>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <button
                onClick={() => addToCart({ ...product, quantity })}
                className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
              >
                Add to Cart
              </button>
              <button
                onClick={() => addToWishlist(product)}
                className={`bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 transition-colors ${isInWishlist(product.id) ? 'opacity-75' : ''}`}
              >
                {isInWishlist(product.id) ? 'In Wishlist' : 'Add to Wishlist'}
              </button>
            </div>
            <Link
              to="/products"
              className="text-indigo-600 hover:text-indigo-700"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Importing products data
import { products } from '../../data/products';

export default ProductDetail;

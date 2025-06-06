import React, { createContext, useContext, useState } from 'react';
import { products as sampleProducts } from '../data/products'; // Import sample products

const AdminContext = createContext();

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [products, setProducts] = useState(sampleProducts);

  const addProduct = (newProduct) => {
    setProducts(prev => [
      ...prev,
      { 
        id: Math.max(...prev.map(p => p.id)) + 1, 
        ...newProduct 
      }
    ]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts(prev => 
      prev.map(product => 
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  const deleteProduct = (productId) => {
    setProducts(prev => prev.filter(product => product.id !== productId));
  };

  const updateOrderStatus = (orderId, status) => {
    // In a real app, you would update the order status in your backend here
    console.log(`Updating order ${orderId} status to ${status}`);
    // For now, we'll just log it
    return Promise.resolve();
  };

  return (
    <AdminContext.Provider value={{
      products,
      addProduct,
      updateProduct,
      deleteProduct,
      updateOrderStatus,
      isAdmin
    }}>
      {children}
    </AdminContext.Provider>
  );
};

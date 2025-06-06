import { useState } from 'react';
import { mockOrders, orderStatuses, orderStatusColors } from '../../data/orders';

// Mock useAdmin hook for demonstration
const useAdmin = () => ({
  products: [
    {
      id: 1,
      name: 'Sample Product',
      price: '99.99',
      description: 'A sample product for demonstration',
      stock: '10',
      image: 'https://via.placeholder.com/150',
      category: 'Electronics'
    }
  ],
  addProduct: (product) => console.log('Adding product:', product),
  updateProduct: (product) => console.log('Updating product:', product),
  deleteProduct: (id) => console.log('Deleting product:', id),
  updateOrderStatus: (orderId, status) => console.log(`Updating order ${orderId} status to ${status}`)
});

const AdminDashboard = () => {
  // Get admin functions and products
  const { products = [], addProduct, updateProduct, deleteProduct, updateOrderStatus } = useAdmin();
  
  // Product form state
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: '',
    stock: '',
    image: '',
    category: 'Electronics'
  });
  
  // UI state
  const [activeTab, setActiveTab] = useState('products');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [statusUpdate, setStatusUpdate] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);

  // Handle order status update
  const handleStatusUpdate = (orderId) => {
    if (statusUpdate && statusUpdate.orderId === orderId) {
      updateOrderStatus(orderId, statusUpdate.newStatus);
      setStatusUpdate(null);
    }
  };

  // Handle product form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingProduct) {
      updateProduct({ ...editingProduct, ...newProduct });
      setEditingProduct(null);
    } else {
      addProduct({ ...newProduct, id: Date.now() });
    }
    // Reset form
    setNewProduct({
      name: '',
      price: '',
      description: '',
      stock: '',
      image: '',
      category: 'Electronics'
    });
  };

  // Handle product edit
  const handleEdit = (product) => {
    setNewProduct(product);
    setEditingProduct(product);
  };

  // Handle cancel edit
  const handleCancelEdit = () => {
    setEditingProduct(null);
    setNewProduct({
      name: '',
      price: '',
      description: '',
      stock: '',
      image: '',
      category: 'Electronics'
    });
  };

  // Handle product delete
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteProduct(id);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="mt-6">
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-2 rounded-md ${
              activeTab === 'products' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-4 py-2 rounded-md ${
              activeTab === 'orders' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Orders
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'products' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Manage Products</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    id="description"
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-1">
                    Stock
                  </label>
                  <input
                    type="number"
                    id="stock"
                    value={newProduct.stock}
                    onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                    Image URL
                  </label>
                  <input
                    type="url"
                    id="image"
                    value={newProduct.image}
                    onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    id="category"
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  >
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Home">Home</option>
                    <option value="Books">Books</option>
                  </select>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    {editingProduct ? 'Update Product' : 'Add Product'}
                  </button>
                  {editingProduct && (
                    <button
                      type="button"
                      onClick={handleCancelEdit}
                      className="flex-1 bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600 transition-colors"
                    >
                      Cancel Edit
                    </button>
                  )}
                </div>
              </form>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Product List</h3>
                <div className="space-y-4">
                  {products.map((product) => (
                    <div key={product.id} className="bg-white p-4 rounded-lg shadow">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div>
                            <h4 className="font-medium">{product.name}</h4>
                            <p className="text-gray-600">${product.price}</p>
                            <p className="text-sm text-gray-500">Stock: {product.stock}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEdit(product)}
                            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(product.id)}
                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Manage Orders</h2>
              <div className="space-y-4">
                {mockOrders.map((order) => (
                  <div key={order.id} className="bg-white p-4 rounded-lg shadow">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">Order #{order.id}</h4>
                        <p className="text-gray-600">Customer: {order.customerName}</p>
                        <p className="text-gray-600">Total: ${order.total}</p>
                        <p className="text-gray-600">
                          Status: 
                          <select
                            value={order.status}
                            onChange={(e) => handleStatusUpdate(order.id, e.target.value)}
                            className="ml-2 p-1 border rounded"
                            style={{ backgroundColor: orderStatusColors[order.status] }}
                          >
                            {Object.entries(orderStatuses).map(([value, label]) => (
                              <option key={value} value={value}>
                                {label}
                              </option>
                            ))}
                          </select>
                        </p>
                      </div>
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

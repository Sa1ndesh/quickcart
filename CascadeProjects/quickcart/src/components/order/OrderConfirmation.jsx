import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);

  // In a real app, this would fetch the order details from an API
  useEffect(() => {
    const mockOrder = {
      id: orderId,
      date: new Date().toLocaleDateString(),
      items: [
        {
          name: 'Premium Headphones',
          price: 199.99,
          quantity: 1
        },
        {
          name: 'Smart Watch',
          price: 299.99,
          quantity: 1
        }
      ],
      total: 499.98,
      shippingAddress: {
        name: 'John Doe',
        address: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001'
      }
    };
    setOrder(mockOrder);
  }, [orderId]);

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Order Confirmation</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Order #{order.id}</h2>
        <p className="text-gray-600 mb-4">Thank you for your order! We'll notify you when your items ship.</p>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Order Summary</h3>
            <div className="space-y-2 mt-2">
              {order.items.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span>{item.name}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t pt-2">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Shipping Address</h3>
            <div className="mt-2">
              <p>{order.shippingAddress.name}</p>
              <p>{order.shippingAddress.address}</p>
              <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Order Date</h3>
            <p className="mt-2">{order.date}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={() => navigate('/products')}
          className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Continue Shopping
        </button>
        <button
          onClick={() => navigate('/orders')}
          className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 transition-colors"
        >
          View Orders
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;

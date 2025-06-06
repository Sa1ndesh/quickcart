export const orderStatuses = {
  PENDING: 'Pending',
  PROCESSING: 'Processing',
  SHIPPED: 'Shipped',
  DELIVERED: 'Delivered',
  CANCELLED: 'Cancelled'
};

export const orderStatusColors = {
  PENDING: 'bg-yellow-100 text-yellow-800',
  PROCESSING: 'bg-blue-100 text-blue-800',
  SHIPPED: 'bg-purple-100 text-purple-800',
  DELIVERED: 'bg-green-100 text-green-800',
  CANCELLED: 'bg-red-100 text-red-800'
};

export const mockOrders = [
  {
    id: 1,
    date: '2024-05-25',
    status: 'Processing',
    trackingNumber: 'TRK123456789',
    deliveryDate: null,
    items: [
      {
        name: 'Premium Wireless Headphones',
        price: 199.99,
        quantity: 1
      },
      {
        name: 'Smart Watch Series 4',
        price: 299.99,
        quantity: 1
      }
    ],
    total: 499.98,
    customer: {
      name: 'John Doe',
      email: 'john@example.com',
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      zip: '10001'
    }
  },
  {
    id: 2,
    date: '2024-05-24',
    status: 'Shipped',
    trackingNumber: 'TRK987654321',
    deliveryDate: '2024-05-28',
    items: [
      {
        name: '15-inch Gaming Laptop',
        price: 999.99,
        quantity: 1
      }
    ],
    total: 999.99,
    customer: {
      name: 'Jane Smith',
      email: 'jane@example.com',
      address: '456 Oak Ave',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90001'
    }
  },
  {
    id: 3,
    date: '2024-05-23',
    status: 'Delivered',
    trackingNumber: 'TRK456789123',
    deliveryDate: '2024-05-25',
    items: [
      {
        name: 'Smartphone X10',
        price: 699.99,
        quantity: 1
      },
      {
        name: 'Tablet Pro',
        price: 399.99,
        quantity: 1
      }
    ],
    total: 1099.98,
    customer: {
      name: 'Bob Johnson',
      email: 'bob@example.com',
      address: '789 Pine St',
      city: 'Chicago',
      state: 'IL',
      zip: '60601'
    }
  }
];

export default mockOrders;
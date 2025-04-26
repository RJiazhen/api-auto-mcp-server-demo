import { OrderDto } from '../dto/order.dto';
import { OrderItemDto } from '../dto/order-item.dto';

// Mock order items
const orderItems: OrderItemDto[] = [
  // Tech Order Items
  {
    id: 1,
    orderId: 1,
    itemName: 'MacBook Pro 16"',
    price: 2499.99,
    quantity: 1,
  },
  {
    id: 2,
    orderId: 1,
    itemName: 'Apple Magic Mouse',
    price: 79.99,
    quantity: 1,
  },
  { id: 3, orderId: 1, itemName: 'USB-C Hub', price: 89.99, quantity: 1 },

  // Fashion Order Items
  {
    id: 4,
    orderId: 2,
    itemName: 'Designer Handbag',
    price: 899.99,
    quantity: 1,
  },
  { id: 5, orderId: 2, itemName: 'Silk Scarf', price: 129.99, quantity: 2 },
  { id: 6, orderId: 2, itemName: 'Leather Wallet', price: 199.99, quantity: 1 },

  // Home Order Items
  { id: 7, orderId: 3, itemName: 'Smart TV 65"', price: 1299.99, quantity: 1 },
  { id: 8, orderId: 3, itemName: 'Soundbar', price: 299.99, quantity: 1 },
  { id: 9, orderId: 3, itemName: 'TV Wall Mount', price: 79.99, quantity: 1 },

  // Additional Orders
  { id: 10, orderId: 4, itemName: 'iPhone 15 Pro', price: 999.99, quantity: 1 },
  { id: 11, orderId: 4, itemName: 'AirPods Pro', price: 249.99, quantity: 1 },
  {
    id: 12,
    orderId: 4,
    itemName: 'MagSafe Charger',
    price: 39.99,
    quantity: 2,
  },

  { id: 13, orderId: 5, itemName: 'Winter Coat', price: 299.99, quantity: 1 },
  { id: 14, orderId: 5, itemName: 'Wool Scarf', price: 49.99, quantity: 1 },
  { id: 15, orderId: 5, itemName: 'Leather Gloves', price: 79.99, quantity: 1 },

  { id: 16, orderId: 6, itemName: 'Coffee Maker', price: 199.99, quantity: 1 },
  { id: 17, orderId: 6, itemName: 'Coffee Beans', price: 19.99, quantity: 2 },
  { id: 18, orderId: 6, itemName: 'Coffee Filters', price: 9.99, quantity: 1 },
];

// Mock orders
export const ORDERS: OrderDto[] = [
  {
    id: 1,
    userId: 1,
    orderNumber: 'ORD-2024-001',
    totalAmount: 2669.97,
    purchaseDate: new Date('2024-01-15'),
    items: orderItems.filter((item) => item.orderId === 1),
  },
  {
    id: 2,
    userId: 2,
    orderNumber: 'ORD-2024-002',
    totalAmount: 1359.96,
    purchaseDate: new Date('2024-01-20'),
    items: orderItems.filter((item) => item.orderId === 2),
  },
  {
    id: 3,
    userId: 3,
    orderNumber: 'ORD-2024-003',
    totalAmount: 1679.97,
    purchaseDate: new Date('2024-01-25'),
    items: orderItems.filter((item) => item.orderId === 3),
  },
  {
    id: 4,
    userId: 1,
    orderNumber: 'ORD-2024-004',
    totalAmount: 1329.96,
    purchaseDate: new Date('2024-02-01'),
    items: orderItems.filter((item) => item.orderId === 4),
  },
  {
    id: 5,
    userId: 2,
    orderNumber: 'ORD-2024-005',
    totalAmount: 429.97,
    purchaseDate: new Date('2024-02-05'),
    items: orderItems.filter((item) => item.orderId === 5),
  },
  {
    id: 6,
    userId: 3,
    orderNumber: 'ORD-2024-006',
    totalAmount: 259.96,
    purchaseDate: new Date('2024-02-10'),
    items: orderItems.filter((item) => item.orderId === 6),
  },
];

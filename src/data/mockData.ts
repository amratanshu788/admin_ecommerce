// Mock data for products and orders
export const products = [
  {
    id: "1",
    name: "Wireless Earbuds Pro",
    price: 199.99,
    category: "Electronics",
    sku: "WEP-001",
    stock: 45,
    description: "Premium wireless earbuds with noise cancellation",
    imageUrl: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=300",
    views: 1240,
    sales: 89,
    rating: 4.8
  },
  {
    id: "2",
    name: "Smart Watch Series X",
    price: 299.99,
    category: "Electronics",
    sku: "SWX-002",
    stock: 32,
    description: "Advanced smartwatch with health tracking",
    imageUrl: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=300",
    views: 2100,
    sales: 156,
    rating: 4.9
  },
  {
    id: "3",
    name: "Premium Leather Backpack",
    price: 129.99,
    category: "Accessories",
    sku: "PLB-003",
    stock: 8,
    description: "Handcrafted leather backpack with laptop compartment",
    imageUrl: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=300",
    views: 890,
    sales: 67,
    rating: 4.7
  }
];

export const orders = [
  {
    id: "ORD-001",
    customerName: "Emma Wilson",
    products: [
      { id: "1", name: "Wireless Earbuds Pro", quantity: 1, price: 199.99 }
    ],
    total: 199.99,
    status: "delivered",
    paymentStatus: "paid",
    date: "2024-03-15"
  },
  {
    id: "ORD-002",
    customerName: "James Miller",
    products: [
      { id: "2", name: "Smart Watch Series X", quantity: 1, price: 299.99 },
      { id: "3", name: "Premium Leather Backpack", quantity: 1, price: 129.99 }
    ],
    total: 429.98,
    status: "shipped",
    paymentStatus: "paid",
    date: "2024-03-14"
  },
  {
    id: "ORD-003",
    customerName: "Sophie Chen",
    products: [
      { id: "1", name: "Wireless Earbuds Pro", quantity: 2, price: 399.98 }
    ],
    total: 399.98,
    status: "pending",
    paymentStatus: "pending",
    date: "2024-03-13"
  }
] as const;
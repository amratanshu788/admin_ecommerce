export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  sku: string;
  stock: number;
  description: string;
  imageUrl: string;
  views: number;
  sales: number;
  rating: number;
}

export interface Order {
  id: string;
  customerName: string;
  products: Array<{
    id: string;
    name: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  status: 'pending' | 'shipped' | 'delivered';
  paymentStatus: 'paid' | 'pending' | 'failed';
  date: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  totalSpent: number;
  orderCount: number;
  joinDate: string;
}

export interface DashboardStats {
  totalSales: number;
  dailyRevenue: number;
  totalOrders: number;
  customerCount: number;
  lowStockItems: number;
}
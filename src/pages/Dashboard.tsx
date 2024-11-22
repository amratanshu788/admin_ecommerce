import React from 'react';
import {
  DollarSign,
  ShoppingCart,
  Users,
  Package,
} from 'lucide-react';
import StatsCard from '../components/StatsCard';
import Chart from '../components/Chart';
import OrderTable from '../components/OrderTable';
import { orders } from '../data/mockData';

const salesData = [
  { name: 'Mon', value: 4000 },
  { name: 'Tue', value: 3000 },
  { name: 'Wed', value: 2000 },
  { name: 'Thu', value: 2780 },
  { name: 'Fri', value: 1890 },
  { name: 'Sat', value: 2390 },
  { name: 'Sun', value: 3490 },
];

export default function Dashboard() {
  const recentOrders = orders.slice(0, 5);

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome back, here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Revenue"
          value="$54,239"
          icon={DollarSign}
          trend={{ value: 12.5, isPositive: true }}
        />
        <StatsCard
          title="Total Orders"
          value="1,429"
          icon={ShoppingCart}
          trend={{ value: 8.2, isPositive: true }}
        />
        <StatsCard
          title="Total Customers"
          value="3,842"
          icon={Users}
          trend={{ value: 5.1, isPositive: true }}
        />
        <StatsCard
          title="Low Stock Items"
          value="12"
          icon={Package}
          trend={{ value: 2.1, isPositive: false }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart data={salesData} title="Revenue Overview" />
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
          <OrderTable orders={recentOrders} />
        </div>
      </div>
    </div>
  );
}
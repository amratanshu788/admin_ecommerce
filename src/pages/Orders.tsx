import React from 'react';
import OrderTable from '../components/OrderTable';
import { orders } from '../data/mockData';

export default function Orders() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Orders</h1>
        <p className="text-gray-600">Track and manage customer orders</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <OrderTable orders={orders} />
      </div>
    </div>
  );
}
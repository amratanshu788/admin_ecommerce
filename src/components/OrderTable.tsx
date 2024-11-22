import React from 'react';
import { Package, CheckCircle, Clock, XCircle } from 'lucide-react';
import type { Order } from '../types';

interface OrderTableProps {
  orders: Order[];
}

export default function OrderTable({ orders }: OrderTableProps) {
  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'shipped':
        return <Package className="h-5 w-5 text-blue-500" />;
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      default:
        return <XCircle className="h-5 w-5 text-red-500" />;
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Order ID</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Customer</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Products</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Total</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="px-4 py-3 text-sm">{order.id}</td>
              <td className="px-4 py-3 text-sm">{order.customerName}</td>
              <td className="px-4 py-3 text-sm">
                {order.products.map((product) => product.name).join(', ')}
              </td>
              <td className="px-4 py-3 text-sm">${order.total.toFixed(2)}</td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  {getStatusIcon(order.status)}
                  <span className="text-sm capitalize">{order.status}</span>
                </div>
              </td>
              <td className="px-4 py-3 text-sm">
                {new Date(order.date).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
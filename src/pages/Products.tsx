import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/mockData';

export default function Products() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Products</h1>
        <p className="text-gray-600">Manage your product inventory</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
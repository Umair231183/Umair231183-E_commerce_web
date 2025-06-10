import axios from 'axios';
import React from 'react';
import Link from 'next/link';

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  thumbnail: string;
};

export default async function ProductList() {
  const res = await axios.get('https://dummyjson.com/products');
  const products: Product[] = res.data.products;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 mt-50">
      <h1 className="text-4xl font-bold mb-8 text-center">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden"
          >
            <Link href={`./singleProduct/${product.id}`}>
            <img
              src={product.thumbnail || product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            </Link>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <p className="text-lg font-bold text-blue-600 mb-4">${product.price}</p>
              <Link
                href={`/products/${product.id}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// src/app/products/[category]/page.tsx

import React from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  thumbnail: string;
}

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  try {
    const res = await fetch(`https://dummyjson.com/products/category/${params.category}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch category: ${params.category}`);
    }

    const data = await res.json();
    const products: Product[] = data.products || [];

    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 capitalize">
          Category: {params.category}
        </h1>

        {products.length === 0 ? (
          <p className="text-gray-500">No products found in this category.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-200"
              >
                <img
                  src={product.thumbnail || product.image}
                  alt={product.title}
                  className="w-full h-40 object-cover mb-3 rounded"
                />
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-green-600 font-medium">${product.price}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error('Error fetching products:', error);
    return <p className="text-red-500">Failed to load products for category: {params.category}</p>;
  }
}

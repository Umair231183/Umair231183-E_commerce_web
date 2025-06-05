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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              <div className="flex items-center gap-4 p-4 border rounded hover:shadow">
                <img
                  src={product.thumbnail || product.image}
                  alt={product.title}
                  width={60}
                  height={60}
                  className="rounded object-cover"
                />
                <span className="text-lg">
                  {product.title} - ${product.price}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

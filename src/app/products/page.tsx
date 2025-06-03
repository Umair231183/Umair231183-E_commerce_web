// app/all-products/page.tsx

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

export default async function AllProductsPage() {
  const res = await axios.get('https://dummyjson.com/products');
  const products: Product[] = res.data.products;

  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img
                  src={product.thumbnail || product.image}
                  alt={product.title}
                  width={50}
                  height={50}
                />
                <span>{product.title} - ${product.price}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

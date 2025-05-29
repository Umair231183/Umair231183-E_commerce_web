'use client'; // If in `app/`
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image
import { Product } from '../type/Product'; // Create this type!

const ProductsPage = () => { // Rename the component
  const products: Product[] = [
    { id: 'shirt1', name: 'The Catalyzer', price: '$16.00', image: '/images/shirt1.jpg' },
    { id: 'shirt2', name: 'Shooting Stars', price: '$21.15', image: '/images/shirt2.jpg' },
    { id: 'shirt3', name: 'Neptune', price: '$12.00', image: '/images/shirt3.jpg' },
    { id: 'shirt4', name: 'The 400 Blows', price: '$18.40', image: '/images/shirt4.jpg' },
    { id: 'shirt5', name: 'The Catalyzer', price: '$16.00', image: '/images/shirt5.jpg' },
    { id: 'shirt6', name: 'Shooting Stars', price: '$21.15', image: '/images/shirt6.jpg' },
    { id: 'shirt7', name: 'Neptune', price: '$12.00', image: '/images/shirt7.jpg' },
    { id: 'shirt8', name: 'The 400 Blows', price: '$18.40', image: '/images/shirt8.jpg' },
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="rounded-md shadow-md overflow-hidden">
            <Link href="/Product" className="block"> {/* Changed href */}
              <div className="relative h-64 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </Link>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Hero from '@/app/Components/Hero';
import ProductList from '../page';
import Image from 'next/image';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  thumbnail: string;
  description: string;
  category: string;
}

export default function ProductPage() {
  const params = useParams();
  const productId = params?.productId as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!productId) return;

    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://dummyjson.com/products/${productId}`);
        const data = await res.json();
        setProduct(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <p className="text-gray-600 text-center mt-10">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-10">Error: {error}</p>;
  if (!product) return <p className="text-center mt-10">No product found.</p>;
  console.log(product)

   const images =  async()  => {
    const res = await axios.get('https://dummyjson.com/products');
    const products: Product[] = res.data.product
   }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 mt-50">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className='text-lg font-bold'>
          <Link href={"/#"} className='text-lg font-bold'>
          Home   <span className='text-purple-800 text-2xl font-extrabold'> &gt; </span> 
            </Link>
          <Link href={"/singleProduct"} className='text-lg font-bold ml-2'>
           All Products <span className='text-purple-800 text-2xl font-extrabold'>&gt;</span> 
          </Link>
          <Link href={''} className='text-lg font-bold ml-2 hover:cursor-alias capitalize'>
          {product.category} <span className='text-purple-800 text-2xl font-extrabold'>&gt;</span>
          </Link>
          <span className='text-gray-700 ml-2'>
          {product.title}
          </span>
        </div>
        <div className="container px-5 py-12 mx-auto">         
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="w-full lg:w-1/2 h-11/12 bg-gray-100 flex items-center justify-center rounded">
              <img
                alt={product.title}
                className="object-contain h-full w-full"
                src={product.thumbnail || product.image}
              />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                 Zilaal
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                {product.title}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {[1, 2, 3, 4].map((i) => (
                    <svg
                      key={i}
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
              </div>
              <p className="leading-relaxed mb-6">{product.description}</p>
              <div className="flex items-center mb-6">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 px-7 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${product.price}
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Add to cart
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:text-red-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

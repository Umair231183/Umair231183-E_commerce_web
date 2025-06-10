
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '../type/Product'; // Create this type!
import axiosInstance from "../../Lib/axiosInstance";

const getProducts = async (): Promise<Product[]> => {
  const res = await axiosInstance.get<{ products: Product[] }>('/products');
  return res.data.products;
  
};



const  ProductsPage =  async () => { // Rename the component
  
  const products = await getProducts();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
            // <Link href={`/singleProduct/${product.id}`} key={product.id} className="block"> {/* Changed href */}
          <div className="rounded-md shadow-md overflow-hidden">
              <div className="relative h-64 w-full">
                <Link href={`/singleProduct/${product.id}`} key={product.id} className='block'>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="object-cover object-center"
                />
                </Link>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
                <p className="text-gray-600">{product.price}$ PKR</p>
              </div>
              </div>
            // {/* </Link> */}
        ))}
        </div>
      </div>
   );
};

export default ProductsPage;
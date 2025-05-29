
// import React from 'react';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';

// function ProductDetailsPage() {

//   return (
//     <div className="container mx-auto py-10">
//       <Navbar />
//       <section className="text-gray-600 body-font overflow-hidden">
//         <div className="container px-5 py-24 mx-auto">
//           <div className="lg:w-5/6 mx-auto flex flex-wrap">
//             <img
//               alt="ecommerce"
//               className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
//               src="/images/shirt1.jpg"
//             />
//             <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//               <h2 className="text-sm title-font text-gray-500 tracking-widest">Zilaal</h2>
//               <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
//               {/* The rest of your JSX remains unchanged */}
//               {/* ... */}
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// }

// export default ProductDetailsPage;





// app/products/page.tsx
import Link from 'next/link';
import axiosInstance from '../../Lib/axiosInstance'
import { Product } from '../type/Product';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const getProducts = async (): Promise<Product[]> => {
  const res = await axiosInstance.get<{ products: Product[] }>('/products');
  return res.data.products;
};

export default async function ProductsPage() {
  const products = await getProducts();
    
  return (
    <div className="grid grid-cols-2 gap-6  pt-40 ">
      <Navbar />
      {products.map(product => (
        <Link href={`/products/${product.id}`} key={product.id}>
          <div className="border p-4  rounded shadow hover:shadow-lg">
            <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover mb-2" />
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p className="text-sm text-gray-600">{product.price} USD</p>
          </div>
        </Link>
      ))}
      <div className='mt-50 ml-[-520]'>
        <Footer />
      </div>
    </div>
  );
}

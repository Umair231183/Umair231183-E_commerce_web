// app/products/page.tsx
import Link from 'next/link';
import axiosInstance from '../../Lib/axiosInstance'
import ProductPage from '../Components/ProductsPage';
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

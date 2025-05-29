// app/products/[id]/page.tsx
import axiosInstance from '../../../Lib/axiosInstance';
import { Product } from '../../type/Product';
import Image from 'next/image';

interface Props {
  params: {
    id: string;
  };
}

const getProduct = async (id: string): Promise<Product> => {
  const res = await axiosInstance.get<Product>(`/products/${id}`);
  return res.data;
};

export default async function ProductPage({ params }: Props) {
  const product = await getProduct(params.id);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} className="w-full h-60 object-cover mb-4" />
      <p>{product.description}</p>
      <p className="text-lg mt-2">Price: ${product.price}</p>
      <p>Rating: {product.rating} ⭐</p>
    </div>
  );
}

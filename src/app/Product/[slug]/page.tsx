"use client";
import Instance from '../../../Lib/Instance';
import { Category } from '../../type/Category';
import Hero from '../../Components/Hero';
import axios from 'axios';
import { useEffect } from 'react';

interface Props {
    params: {
        name: string;
    };
}

const getProduct = async (name?: string): Promise<Category> => {
    const res = await axios.get("https://dummyjson.com/products/categories");
    const data = res.data;
    console.log("Data : ", data)
    return res.data;
};


useEffect(() => {
    getProduct();
}, [])

export default async function ProductPage({ params }: Props) {
    const category = await getProduct(params.name);

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">{category.name}</h1>
            <img src={category.url} alt={category.name} className="w-full h-60 object-cover mb-4" />
            <p>{category.url}</p>
            {/* <p className="text-lg mt-2">Price: ${}</p>
      <p>Rating: {product.rating} ⭐</p> */}
        </div>
    );
}

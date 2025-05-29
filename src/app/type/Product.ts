export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}


// export interface category {
//   slug: string;
//   name:string;
//   url:"https://dummyjson.com/products/category"
// }
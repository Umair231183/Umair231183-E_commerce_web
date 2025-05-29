import axios, { Axios } from 'axios'

//  const Instance = axios.create({
//   baseURL: 'https://dummyjson.com',
//   headers: {
//     'Content-Type': 'application/json',
//   }
// // });

//  Fetch categories separately (not part of axios.create)
const Instance = axios.create({
  baseURL: 'https://your-api-url.com/api',
});
export default Instance;
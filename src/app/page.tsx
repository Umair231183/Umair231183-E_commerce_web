
import Image from "next/image";
import HomeComponent from "./Components/HomeComponent"
import About from "../app/Components/About";
import Contact from "./Components/Contact";
// import Navbar from ."./app/Components/Navbar";
import Hero from "../app/Components/Hero";
// import Shirt1 from "./Components/Shirt1";
// import Footer from "./Components/Footer";
import Feature from "./Components/Feature";
import ProductsPage from "./Components/ProductsPage";
export default function Home() {
  return (
<div>
 <HomeComponent />
 {/* <Navbar /> */}
 <Hero />
 <ProductsPage />
 <Feature />
 <Contact />
 {/* <Shirt1 /> */}
 {/* <Footer /> */}
</div>
  );
}

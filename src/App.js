// import Home from "./components/Home";
import CartDetails from "./components/CartDetails";
import "./App.css";
import NewProduct from "./NewProduct.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ImageSlider from "./ImageSlider";
// import Footer from "./Footer";
import ProductList from "./ProductList";

// import ImageSlider from "./components/ImageSlider";
import { Toaster } from "react-hot-toast";
// import Home1 from "./components/Home1";
// import Products2 from "./Products2";
import LatestProducts from "./LatestProducts";
// import MyCard45 from "./MyCard45";
import Navbar from "./Navbar.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <NewProduct></NewProduct>
        <Routes>
          <Route path="/" element={<ProductList />} />
          {/* <Route path="/about" element={<Carousel></Carousel>} /> */}
          {/* <Route path="/services" element={<ProductList></ProductList>} /> */}
          <Route path="/about" element={<LatestProducts></LatestProducts>} />
          {/* <Route path="/slider" element={<ImageSlider />} /> */}
          <Route path="/cart" element={<CartDetails />} />
          {/* <Route path="/footer" element={<Footer />} /> */}
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;

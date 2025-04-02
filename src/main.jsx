import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./home/HomePage";
import Signup from "./signup/SignUp";
import AboutPage from './about/AboutPage'
import PricingPage from "./pricing/PricingPage";
import SupportPage  from './support/SupportPage';
import NotFound from "./NotFound"
import Footer from "./Footer";
import NavBar from './NavBar'
import ProductPage from "./products/ProductPage";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
   < NavBar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
);

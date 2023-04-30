import "./App.css";
import React from "react";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import { Products } from "./pages/fashion";
import { Contact } from "./pages/contact";
import { About } from "./pages/about";
import { NotFound } from "./pages/notfoundpage";
import Home from "./pages/homePage";
import { ProductDetails } from "./pages/singleProductDetails";
import Navbar from "./components/navbar";
import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/details/:id" element={<ProductDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

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
            <Route path="/zee_web" exact Component={<Home />} />
            <Route path="/products" exact Component={<Products />} />
            <Route
              path="/product/details/:id"
              exact
              Component={<ProductDetails />}
            />
            <Route path="/contact" exact Component={<Contact />} />
            <Route path="/about" exact Component={<About />} />
            <Route path="*" exact Component={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

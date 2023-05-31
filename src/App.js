import "./App.css";
import React from "react";
import {
  Route,
  Routes,
  BrowserRouter,
  useLocation,
  Outlet,
} from "react-router-dom";
import { Products } from "./pages/fashion";
import { About } from "./pages/about";
import { NotFound } from "./pages/notfoundpage";
import Home from "./pages/homePage";
import { ProductDetails } from "./pages/singleProductDetails";
import Navbar from "./components/navbar";
import Footer from "./components/footer/index";
import { useEffect } from "react";
import Contact from "./pages/contact";

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

          <Routes>
            <Route exact element={<PageLayout />}>
              <Route path="/zee_web" exact element={<Home />} />
              <Route path="/zee_web/products" exact element={<Products />} />
              <Route
                path="/zee_web/product/details/:id"
                exact
                element={<ProductDetails />}
              />
              <Route path="/zee_web/contact" exact element={<Contact />} />
              <Route path="/zee_web/about" exact element={<About />} />
            </Route>
            <Route path="*" exact element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

const PageLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

export default App;

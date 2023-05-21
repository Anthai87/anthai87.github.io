import React, { useEffect, useState } from "react";
import "./style.css";

const Footer = () => {
  const [isVisibile, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <footer className="footer pt-5">
      <div className="row container mx-auto g-4">
        <div className="col-lg-4 col-md-6 col-sm-7">
          <img src="./logo-v1.png" alt="" className="img-fluid w-25" />
          <p className="pt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            officiis sapiente, fugit voluptas deleniti provident.
          </p>
        </div>
        <div className="footer-one col-lg-2 col-md-3 col-sm-5">
          <h5 className="pb-2 text-uppercase">Quick Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">About</a>
            </li>
            <li>
              <a href="#!">Blogs</a>
            </li>
            <li>
              <a href="#!">Concept</a>
            </li>
            <li>
              <a href="#!">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="footer-one col-lg-2 col-md-3 col-sm-4">
          <h5 className="pb-2 text-uppercase">Contact Us</h5>
          <div>
            <h6 className="text-uppercase">Address</h6>
            <p>Tjørnegade 3, 2. Tv</p>
          </div>
          <div>
            <h6 className="text-uppercase">Phone</h6>
            <p>(+45) 93 93 93 93</p>
          </div>
          <div>
            <h6 className="text-uppercase">EMail</h6>
            <p>info@something.com</p>
          </div>
        </div>
        <div className="footer__newsletter col-lg-4 col-md-8 col-sm-8">
          <h5 className="pb-2 text-uppercase">Newsletter</h5>
          <form action="#">
            <input type="text" placeholder="Email" />
            <button type="submit" className="site-btn">
              subscribe
            </button>
          </form>
          <div className="footer__social">
            <a href="#!" className="me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#!" className="me-4">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#!" className="me-4">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="#!" className="me-4">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-12">
            <div className="footer__copyright__text">
              <p>
                {" "}
                Copyright &copy; {new Date().getFullYear()} All Rights Reserved
                by | This website is made with{" "}
                <i className="fa fa-heart" aria-hidden="true"></i> by Anthony
                Haidari
              </p>
            </div>
            <div className="go-top">
              {isVisibile && (
                <button
                  onClick={scrollToTop}
                  className="link-is-visible"
                ></button>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

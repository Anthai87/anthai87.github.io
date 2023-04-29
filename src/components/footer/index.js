import { ArrowUpward } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./styleFooter.css";

export const Footer = () => {
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
    <footer className="text-center text-lg-start bg-white text-muted position-relative">
      <section className="container d-flex justify-content-center justify-content-lg-between border-bottom">
        <div className="me-5 d-none d-lg-block">
          <p>Get connected with us on social networks:</p>
        </div>
        <div className="footer__social">
          <a href="#!" className="me-4">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#!" className="me-4">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#!" className="me-4">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </section>
      <div className="container text-center pt-3">
        <div className="copyright">
          Copyright &copy; {new Date().getFullYear()} All Rights Reserved by
          <strong> Zeecycled</strong>
        </div>

        {isVisibile && (
          <button className="uyF88V" type="button" onClick={scrollToTop}>
            <ArrowUpward />
          </button>
        )}
      </div>
    </footer>
  );
};

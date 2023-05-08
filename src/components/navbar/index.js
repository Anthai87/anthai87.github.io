import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 fixed-top">
        <div className="container">
          <Link to="/zee_web" className="navbar-brand">
            <img
              src="./logo-v1.png"
              alt=""
              className="img-fluid d-inline-block align-text-top"
              width="70"
              height="40"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
          >
            <span>
              <i id="bar" className="fas fa-bars "></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav ms-auto">
              <li>
                <Link className="nav-link" to="/zee_web/products">
                  Fashion
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="#!">
                  Sorteringsposer
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/zee_web/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/zee_web/about">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Follow
                  <i className="fas fa-angle-down"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.instagram.com/zeecycled/"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.facebook.com/OpbrugGenbrug"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-start"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <img
            src="./logo-v1.png"
            alt=""
            className="img-fluid d-inline-block align-text-top"
            width="70"
            height="40"
          />
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul>
            <li>
              <Link className="text-link" to="/zee_web">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-link" to="/zee_web/products">
                Fashion
              </Link>
            </li>
            <li>
              <Link className="text-link" to="#!">
                Sorteringsposer
              </Link>
            </li>
            <li>
              <Link className="text-link" to="/zee_web/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="text-link" to="/zee_web/about">
                About
              </Link>
            </li>
            <div className="dropdownmenu" style={{ padding: "5px 10px" }}>
              <a
                href="/#"
                style={{ cursor: "pointer" }}
                className="text-link dropdown-toggle"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
              >
                Follow
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a
                    className="dropdown-item"
                    href="https://www.instagram.com/zeecycled/"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="https://www.facebook.com/OpbrugGenbrug"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

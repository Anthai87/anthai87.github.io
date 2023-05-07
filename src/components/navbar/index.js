import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);

    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  };
  showMenu("nav-toggle", "nav-menu");

  return (
    <>
      <header className="header">
        <nav className="nav container">
          <div className="nav__data">
            <a href="#" className="nav__logo">
              Logo
            </a>
            <div className="nav__toggle" id="nav-toggle">
              <i className="fa fa-bars nav__toggle-menu"></i>
              <i className="fa fa-times nav__toggle-close"></i>
            </div>
          </div>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li>
                <Link className="nav-link" to="/zee_web/products">
                  Fashion
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="#!">
                  Sortering
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/zee_web/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/zee_web/contact">
                  Contact
                </Link>
              </li>
              <li className="dropdown__item">
                <div className="nav__link dropdown__button">
                  Follow <i class="fa fa-angle-down dropdown__arro qw"></i>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-2">
              <div className="header__logo">
                <Link to="/zee_web" className="navbar-brand">
                  <img src="./logo-v1.png" alt="" className="img-fluid" />
                </Link>
              </div>
            </div>

            <div className="col-xl-6 col-lg-7">
              <nav className="header__menu">
                <ul>
                  <li>
                    <Link className="nav-link" to="/zee_web/products">
                      Fashion
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="#!">
                      Sortering
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/zee_web/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/zee_web/contact">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <a href="#!">Follow</a>
                    <ul className="dropdown">
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
              </nav>
            </div>
            <div className="nav__toggle" id="nav-toggle">
              <i className="fa fa-bars nav__toggle-menu"></i>
              <i class="fa-sharp fa-light fa-xmark nav__toggle-close"></i>
            </div>
          </div>
        </div>
      </header> */}

      {/* <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 fixed-top">
        <div className="container">
          <Link to="/zee_web" className="navbar-brand">
            <img src="./logo-v1.png" alt="" className="img-fluid" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
          >
            <span>
              <i id="bar" className="fas fa-bars "></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav ms-auto">
              {/* ****  Dropdown  **** */}

      {/* <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#!"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                  <i className="fas fa-angle-down"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/zee_web/products">
                      Fashion
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#!">
                      Sorteringsposer
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Dropdown */}

      {/* <li className="nav-item">
                <Link className="nav-link" to="/zee_web/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/zee_web/about">
                  About Us
                </Link>
              </li>

              {/* ****  Dropdown  **** */}

      {/* <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#!"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Follow Us
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
              </li>  */}

      {/* Dropdown */}
      {/* </ul>
          </div>
        </div>
      </nav>   */}
    </>
  );
};

export default Navbar;

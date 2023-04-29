import React from "react";
import { UnderFooter } from "../../components/underFooter";
import "./style.css";
import { PathContact } from "../../components/path";

export const Contact = () => {
  return (
    <>
      <PathContact />

      <section className="contact spad">
        <div className="container">
          <div className="col-md">
            <h1 className="text-center text-uppercase pb-5">Contact us</h1>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="contact__content">
                <div className="contact__address">
                  <h5>Contact Information</h5>
                  <ul>
                    <li>
                      <h6>
                        <i className="fa fa-map-marker"></i>
                        Address
                      </h6>
                      <p>Tjørnegade 3, 2tv, 2200 København N</p>
                    </li>
                    <li>
                      <h6>
                        <i className="fa fa-phone"></i>
                        Phone
                      </h6>
                      <span>+45 45 45 45 45</span>
                    </li>
                    <li>
                      <h6>
                        <i className="fa fa-headphones"></i>
                        Support
                      </h6>
                      <p>support.something@zeecycled.com</p>
                    </li>
                  </ul>
                </div>
                <div className="contact__form">
                  <h5>SEND MESSAGE</h5>

                  <form action="#">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit" className="site-btn">
                      send message
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="contact__map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.0407145975955!2d12.551376377696624!3d55.688279896958086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465253a97592cac7%3A0xc9a17b2dd775372e!2sTj%C3%B8rnegade%203%2C%202200%20K%C3%B8benhavn!5e0!3m2!1sda!2sdk!4v1682271023748!5m2!1sda!2sdk"
                  width="100%"
                  height="780"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="google-maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="p-5">
        <div className="container">
          <div className="col-md">
            <h1 className="text-center text-uppercase mb-4">Contact us</h1>
          </div>
        </div>
      </section>
      <section className="p-2">
        <div className="container">
          <div className="col-md">
            <h1 className="mb-4">Contact Information</h1>
          </div>
        </div>
      </section>
      <section className="p-5">
        <div className="container">
          <div className="col-md">
            <h3 className="mb-4 text-uppercase">Copenhagen</h3>
          </div>
          <div className="d-flex-row">
            <div className="col-md-8 col-lg-8 col-xl-8 mx-auto mb-md-0 mb-4">
              <p className="paragrafs">
                <i className="fas fa-home me-3"></i>Tjørnegade 3, 2.TV, 2200
                København N
              </p>
              <p className="paragrafs">
                <i className="fas fa-envelope me-3"></i>info@example.com
              </p>
              <p className="paragrafs">
                <i className="fas fa-phone me-3"></i>+45 93939393
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="p-5">
        <div className="container">
          <div className="col-md">
            <h3 className="mb-4 text-uppercase">Social Media</h3>
          </div>
          <div class="d-flex-row ">
            <div class="col-md-8 col-lg-8 col-xl-8 mx-auto mb-md-0 mb-4">
              <p className="paragrafs">
                <a href="#!" className="me-4 text-reset">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </p>
              <p className="paragrafs">
                <a href="#!" className="me-4 text-reset">
                  <i class="fab fa-instagram"></i>
                </a>
              </p>
              <p className="paragrafs">
                <a href="#!" className="me-4 text-reset">
                  <i class="fab fa-linkedin"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="p-5">
        <div className="container">
          <h2 className="mb-4 text-uppercase fw-bold">Send us a message</h2>
          <form action="" className="row g-4 needs-validation">
            <div className="col-md-6">
              <label className="form-label" for="firstName">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label" for="lastName">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                required
              />
            </div>
            <div className="col-md-8">
              <label for="emailinfo" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                className="form-control"
                id="emailinfo"
                required
              />
            </div>
            <div className="col-md-4">
              <label for="phoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                placeholder="+45 35 35 35 35"
              />
            </div>
            <div className="col-md-12">
              <label for="comments" className="form-label">
                Comments, questions?
              </label>
              <textarea
                id="comments"
                cols="30"
                rows="3"
                className="form-control"
                required
              ></textarea>
            </div>

            <div className="col-md-6 mx-auto pt-4 pb-5">
              <button
                type="submit"
                className="btn btn-dark w-100 text-uppercase"
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </section> */}
      <section className="">
        <UnderFooter />
      </section>
    </>
  );
};

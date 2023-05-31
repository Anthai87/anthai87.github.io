import React, { useRef } from "react";
import "./style.css";
import { PathContact } from "../../components/path";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_22nc36h",
        "template_ojz69ns",
        form.current,
        "BmwNBy4xcHRKxbgY0"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(result.text + ", message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
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

                  <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="needs-validation"
                    novalidate
                  >
                    <div>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Name"
                        name="user_name"
                        id="validationTooltip01"
                        required
                      />
                      <div className="valid-tooltip">Looks good!</div>
                    </div>

                    <input
                      className="form-control"
                      type="text"
                      placeholder="Email"
                      name="user_email"
                      required
                    />
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      required
                    />
                    <textarea
                      className="form-control"
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                    <button type="submit" value="Send" className="site-btn">
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
    </>
  );
};

export default Contact;

import { Carousel } from "../../components/slick";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                className="d-block w-100"
                alt="..."
                height="100%"
              />
              <div className="carousel-caption">
                <h5 className="animate__slideInDown">Shaping a new tomorrow</h5>
                <p>
                  At Zeecycled, we believe in the immense potential of every
                  individual to make a positive impact on our planet. Together,
                  we are shaping a new tomorrow, where sustainability takes
                  center stage in our daily lives. By embracing the power of
                  second hand, we unlock a world of possibilities that not only
                  revolutionize our fashion choices but also contribute to
                  building a greener future.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                className="d-block w-100"
                alt="..."
                height="100%"
              />
              <div className="carousel-caption">
                <h5 className="animate__fadeInDown">
                  Elevate Your Style, Empower the Planet
                </h5>
                <p>
                  Step into the World of Second Hand Fashion and Embrace a
                  Sustainable Future! At our online marketplace, we curate a
                  wide range of quality second hand products, meticulously
                  chosen to inspire conscious shopping. Join us in redefining
                  fashion with an eco-friendly mindset, where every purchase
                  contributes to a greener tomorrow.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                className="d-block w-100"
                alt="..."
                height="100%"
              />
              <div className="carousel-caption">
                <h5 className="animate__fadeInDown">Recycling is an art</h5>
                <p>
                  Unleash Your Inner Artist and: Embrace the Art of Recycling in
                  Fashion!{" "}
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <section
        id="section_fashion"
        className="text-dark p-5 text-center text-sm-start"
      >
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6 col-lg-6">
              <div className="p-t-7 p-r-15 p-r-15-lg p-r-0-m">
                <h1>
                  Zeecycled <span className="text-success">Fashion</span>
                </h1>
                <p className="lead my-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <button
                  className="btn btn-dark btn-lg"
                  type="button"
                  onClick={() => navigate(`/zee_web/products/`)}
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <img
                className="img-fluid"
                src="https://images.pexels.com/photos/3738087/pexels-photo-3738087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                style={{ width: "100%", height: "555px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="p-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Carousel />
            </div>
          </div>
        </div>
      </section>

      <section
        id="section_sorteringssystemer"
        className=" text-dark p-5 text-center text-sm-start"
      >
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6 col-lg-6">
              <div className="p-r-15-lg">
                <h1 className="text-success">Sorting systems</h1>
                <p className="lead my-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <button className="btn btn-dark btn-lg" type="button">
                  Learn More
                </button>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <img
                className="img-fluid w-100"
                src="https://cdn.pixabay.com/photo/2021/12/27/17/00/garbage-6897720_960_720.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section id="banner" className="my-5">
        <div className="container">
          <h4>MID SEASON´S ARRIVALS</h4>
          <h1>
            Autumn Collections
            <br />
            Check Them Now
          </h1>
          <button
            className="btn btn-success btn-lg"
            type="button"
            onClick={() => navigate(`/zee_web/products/`)}
          >
            See More
          </button>
        </div>
      </section>

      <section id="id" className="p-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-new-arrival mb-50 text-center wow fadeInUp"
                data-now-duration="1s"
                data-now-delay=".1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="popular-img">
                  <img
                    src="https://images.pexels.com/photos/2249248/pexels-photo-2249248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="w-100 card-img-top"
                    alt="..."
                  />
                </div>
                <div className="popular-caption">
                  <h3>Knitted Jumper</h3>
                  {/* <div className="rating mb-10">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div> */}
                  <div>
                    <span>kr. 30.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-new-arrival mb-50 text-center wow fadeInUp"
                data-now-duration="1s"
                data-now-delay=".1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="popular-img">
                  <img
                    src="https://images.pexels.com/photos/4937224/pexels-photo-4937224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="w-100 card-img-top"
                    alt="..."
                  />
                </div>
                <div className="popular-caption">
                  <h3>Knitted Jumper</h3>
                  {/* <div className="rating mb-10">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div> */}
                  <div>
                    <span>kr. 30.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-new-arrival mb-50 text-center wow fadeInUp"
                data-now-duration="1s"
                data-now-delay=".1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="popular-img">
                  <img
                    src="https://images.pexels.com/photos/4374510/pexels-photo-4374510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="w-100 card-img-top"
                    alt="..."
                  />
                </div>
                <div className="popular-caption">
                  <h3>Knitted Jumper</h3>
                  {/* <div className="rating mb-10">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div> */}
                  <div>
                    <span>kr. 30.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-new-arrival mb-50 text-center wow fadeInUp"
                data-now-duration="1s"
                data-now-delay=".1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="popular-img">
                  <img
                    src="https://images.pexels.com/photos/4057673/pexels-photo-4057673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="w-100 card-img-top"
                    alt="..."
                  />
                </div>
                <div className="popular-caption">
                  <h3>Knitted Jumper</h3>
                  {/* <div className="rating mb-10">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div> */}
                  <div>
                    <span>kr. 30.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSTATGRAM */}

      <section id="new" className="w-100 py-5">
        <div className="row p-0 m-0">
          <div className="image col-lg-2 col-md-4 col-sm-4 p-0">
            <img
              className="image__img img-fluid"
              src="./model_with_bag.jpg"
              alt=""
            />
            <div className="image__overlay">
              <i className="image__title fab fa-instagram"></i>
              <a
                className="image__description"
                href="https://www.instagram.com/zeecycled/"
              >
                @ zeecycled
              </a>
            </div>
          </div>
          <div className="image col-lg-2 col-md-4 col-sm-4 p-0">
            <img
              className="image__img img-fluid"
              src="./bag_keyhanger.jpg"
              alt=""
            />
            <div className="image__overlay">
              <i className="image__title fab fa-instagram"></i>
              <a
                className="image__description"
                href="https://www.instagram.com/zeecycled/"
              >
                @ zeecycled
              </a>
            </div>
          </div>
          <div className="image col-lg-2 col-md-4 col-sm-4 p-0">
            <img className="image__img img-fluid" src="./models_1.jpg" alt="" />
            <div className="image__overlay">
              <i className="image__title fab fa-instagram"></i>
              <a
                className="image__description"
                href="https://www.instagram.com/zeecycled/"
              >
                @ zeecycled
              </a>
            </div>
          </div>
          <div className="image col-lg-2 col-md-4 col-sm-4 p-0">
            <img className="image__img img-fluid" src="./bag2.jpg" alt="" />
            <div className="image__overlay">
              <i className="image__title fab fa-instagram"></i>

              <a
                className="image__description"
                href="https://www.instagram.com/zeecycled/"
              >
                @ zeecycled
              </a>
            </div>
          </div>
          <div className="image col-lg-2 col-md-4 col-sm-4 p-0">
            <img className="image__img img-fluid" src="./models_2.jpg" alt="" />
            <div className="image__overlay">
              <i className="image__title fab fa-instagram"></i>

              <a
                className="image__description"
                href="https://www.instagram.com/zeecycled/"
              >
                @ zeecycled
              </a>
            </div>
          </div>
          <div className="image col-lg-2 col-md-4 col-sm-4 p-0">
            <img className="image__img img-fluid" src="./bag1.jpg" alt="" />
            <div className="image__overlay">
              <i className="image__title fab fa-instagram"></i>

              <a
                className="image__description"
                href="https://www.instagram.com/zeecycled/"
              >
                @ zeecycled
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;

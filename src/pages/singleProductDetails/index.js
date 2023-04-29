import React, { useState } from "react";
import { UnderFooter } from "../../components/underFooter";
import "./style.css";
import { useParams } from "react-router-dom";
import data from "../../data/data.json";

export const ProductDetails = () => {
  const { id } = useParams();

  const [selectedImg, setSelectedImg] = useState(0);

  const singleProduct = data.filter((item) => item.id === parseInt(id));

  return (
    <>
      <section id="section" className="single_product p-5">
        <div className="container">
          {singleProduct.map((item) => (
            <div className="single_product row mt-5">
              <div className="col-lg-5 col-md-12 col-12">
                <img
                  src={item.imageUrl[selectedImg]}
                  alt=""
                  className="img-fluid w-100 pb-2"
                  id="MainImg"
                />
                <div className="small-img-group">
                  <div className="small-img-col">
                    <img
                      src={item.imageUrl[0]}
                      onClick={(e) => setSelectedImg(0)}
                      alt=""
                      className="small-img"
                      width="100%"
                    />
                  </div>
                  <div className="small-img-col">
                    <img
                      onClick={(e) => setSelectedImg(1)}
                      src={item.imageUrl[1]}
                      alt=""
                      className="small-img"
                      width="100%"
                    />
                  </div>
                  <div className="small-img-col">
                    <img
                      onClick={(e) => setSelectedImg(2)}
                      src={item.imageUrl[2]}
                      alt=""
                      className="small-img"
                      width="100%"
                    />
                  </div>
                  <div className="small-img-col">
                    <img
                      onClick={(e) => setSelectedImg(3)}
                      src={item.imageUrl[3]}
                      alt=""
                      className="small-img"
                      width="100%"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12 col-12">
                <h6>Home / Bag</h6>
                <h3 className="py-4">Women's Fashion Bag</h3>
                <h2>kr. {item.price}</h2>
                <h4 className="mt-5 mb-5">Product Details</h4>
                <span>
                  {item.longDesc}
                  <br />
                  <br />
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut loret fugit, sed quia consequuntur magni dolores eos
                  qui ratione voluptatem sequi nesciunt loret. Neque porro lorem
                  quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut loret
                  fugit, sed quia ipsu consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Nulla consequat massa quis
                  enim. Lorem ipsum dolor sit amet, consectetuer adipiscing
                  elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                  sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Donec quam felis, ultricies nec,
                  pellentesque eu, pretium quis, sem.
                </span>
                <div className="product__details__widget">
                  <ul className="">
                    <li>
                      <span>Availability:</span>
                      <div className="stock__checkbox">
                        <label for="stockin">
                          <input type="checkbox" id="stockin" />
                          In Stock
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </li>

                    <li>
                      <span>Available Size:</span>
                      <div className="size__btn">
                        <label for="xs-btn" className="active">
                          <input type="radio" id="xs-btn" />
                          xs
                        </label>
                        <label for="xs-btn" className="">
                          <input type="radio" id="xs-btn" />s
                        </label>
                        <label for="xs-btn" className="">
                          <input type="radio" id="xs-btn" />m
                        </label>
                        <label for="xs-btn" className="">
                          <input type="radio" id="xs-btn" />l
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="">
        <div className="container text-center mt-5 py-5">
          <h2 className="fw-bolder">Related Products</h2>
        </div>
        <div className="container row mx-auto">
          <div className="product text-center col-lg-3 col-md-4 col-12">
            <img
              src="https://images.pexels.com/photos/1374910/pexels-photo-1374910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="img-fluid mb-3"
            />
            <h5 className="p-name">Mulberry Shoulder Bag</h5>
            <h5 className="p-price">kr. 1,600.00</h5>
          </div>
          <div className="product text-center col-lg-3 col-md-4 col-12">
            <img
              src="https://images.pexels.com/photos/4352249/pexels-photo-4352249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="img-fluid mb-3"
            />
            <div className="p-desc">
              <h5 className="p-name">Mulberry Kjole</h5>
              <h5 className="p-price">kr. 1,600.00</h5>
              <h5 className="p-size">size 34</h5>
            </div>
          </div>
          <div className="product text-center col-lg-3 col-md-4 col-12">
            <img
              src="https://images.pexels.com/photos/1374910/pexels-photo-1374910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="img-fluid mb-3"
            />
            <h5 className="p-name">Mulberry Shoulder Bag</h5>
            <h5 className="p-price">kr. 1,600.00</h5>
          </div>
          <div className="product text-center col-lg-3 col-md-4 col-12">
            <img
              src="https://images.pexels.com/photos/4352249/pexels-photo-4352249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="img-fluid mb-3"
            />
            <div className="p-desc">
              <h5 className="p-name">Mulberry Kjole</h5>
              <h5 className="p-price">kr. 1,600.00</h5>
              <h5 className="p-size">size 34</h5>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <UnderFooter />
      </section>
    </>
  );
};

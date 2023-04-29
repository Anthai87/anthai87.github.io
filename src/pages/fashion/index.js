import React from "react";
import { UnderFooter } from "../../components/underFooter";
import "./style.css";
import { PathFashion } from "../../components/path";
import { useSelector } from "react-redux";
import Data from "../../data/data.json";
import Item from "../../components/item";

export const Products = () => {
  const items = useSelector((state) => state.cart.items);
  console.log(items);

  return (
    <>
      <PathFashion />
      <section className="">
        <div className="container mt-5 py-5">
          <div className="">
            <h2>Our Featured Products</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio,
              cupiditate neque dolore dignissimos incidunt doloremque delectus
              eius assumenda facilis adipisci.
            </p>
          </div>
          <div className="row mt-4 py-4">
            {Data.map((item) => (
              <Item item={item} key={item.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="">
        <UnderFooter />
      </section>
    </>
  );
};

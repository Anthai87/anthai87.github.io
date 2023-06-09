import React from "react";
import Data from "../../data/data.json";
import Item from "../../components/item";
import { PathSortingsystems } from "../../components/path";

const SortingSystems = () => {
  return (
    <>
      <PathSortingsystems />
      <section id="itemId" className="">
        <div className="container py-5">
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
    </>
  );
};

export default SortingSystems;

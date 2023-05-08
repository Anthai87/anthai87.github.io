import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const SlickCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card border-0"
      style={{ cursor: "pointer" }}
      onClick={() => navigate(`/zee_web/product/details/${item.id}`)}
    >
      <div className="product-images">
        <img
          src={item.imageUrl[0]}
          alt=""
          className=" img-fluid"
          key={item.id}
        />
        <img
          src={item.imageUrl[1]}
          alt=""
          className="img-fluid hover-img"
          key={item.id}
        />
      </div>
      <div className="card-body text-start text-md-start">
        <h6 style={{ color: "#111111" }} key={item.id}>
          {item.brand}
        </h6>
        <p key={item.id}>{item.shortDesc}</p>
        <span
          key={item.id}
          style={{
            color: "#666",
            fontSize: "14px",
            lineHeight: "1.466667",
            letterSpacing: "1px",
            paddingTop: "0px",
          }}
        >
          kr. {item.price}
        </span>
      </div>
    </div>
  );
};

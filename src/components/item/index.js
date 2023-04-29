import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      className="product text-center col-lg-3 col-md-4 col-12"
      onClick={() => navigate(`/product/details/${item.id}`)}
    >
      <img
        src={item.imageUrl}
        alt=""
        className="img-fluid mb-3"
        key={item.id}
      />
      <div className="p-desc">
        <h5 className="p-name" key={item.id}>
          {item.brand}
        </h5>
        <h5 className="p-price" key={item.id}>
          kr. {item.price}
        </h5>
        <h5 className="p-size" key={item.id}>
          size {item.size}
        </h5>
      </div>
    </div>
  );
};

export default Item;

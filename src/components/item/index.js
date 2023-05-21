import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div id="itemID" className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
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
        onClick={() => navigate(`/zee_web/product/details/${item.id}`)}
      >
        <div className="popular-img">
          <img
            src={item.imageUrl}
            className="w-100 card-img-top img-fluid"
            alt="..."
            key={item.id}
          />
        </div>
        <div className="popular-caption">
          <h3 key={item.id}>{item.brand}</h3>
          <div className="p_desc mb-10">
            <span key={item.id}>{item.shortDesc}</span>
          </div>
          <div>
            <span key={item.id}>kr. {item.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;

import { useContext } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { AuthContext } from "../Context";

const ProductCard = (props) => {
  const { setProductPageData } = useContext(AuthContext);
  return (
    <section className="product-card">
      <div className="product-image">
        <Link to={"/product"}>
          <img
            src={props.image}
            alt="Loading Image..."
            onClick={() =>
              setProductPageData({
                title: props.title,
                largeimage: props.largeImage,
                image: props.image,
                price: props.price,
                description: props.description,
              })
            }
          />
        </Link>
      </div>
      <h4>{props.name.split("+").join(" ")}</h4>
      <p>KES {Math.round(props.price * 128.33).toLocaleString("en-us")}</p>
    </section>
  );
};

export { ProductCard };

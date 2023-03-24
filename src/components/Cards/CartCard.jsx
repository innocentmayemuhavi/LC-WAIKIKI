import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context";
import "./index.css";

const CartCard = (props) => {
  const { Cart, setCart, setProductPageData } = useContext(AuthContext);

  const removeFromCart = (data) => {
    console.log(data.title);
    const filtered = Cart.clothes.filter(
      (data) => data.title !== props.title || data.size !== props.size
    );
    console.log(filtered);
    setCart((prev) => {
      return {
        ...prev,
        clothes: filtered,
        total: filtered.reduce((prev, curr) => {
          return prev + curr.price * curr.Quantity;
        }, 0),
      };
    });
  };

  return (
    <div>
      <div className="cart-product">
        <div className="data-1">
          <div className="cart-image">
            <img src={props.image}></img>
          </div>

          <Link
            to={"/product"}
            onClick={() => setProductPageData({ ...props })}
          >
            <p>{props.title}</p>
          </Link>
        </div>

        <div className="cart-prod-details">
          <div className="product-data-1">
            <p> Qty:{props.Quantity}</p>
            <p> Size:{props.size}</p>
            <p> KES {Math.round(props.price * 122.88).toLocaleString()}</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            onClick={() => removeFromCart({ ...props })}
          >
            <path d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06Z"></path>
          </svg>
        </div>
      </div>

      <div className="cart-product-2">
        <div className="cart-image">
          <img src={props.image}></img>
        </div>
        <div className="cart-prod-2-data">
          <div className="cart-prod-2-data-1">
            <Link
              to={"/product"}
              onClick={() => setProductPageData({ ...props })}
            >
              <p>{props.title}</p>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              onClick={() => removeFromCart({ ...props })}
            >
              <path d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06Z"></path>
            </svg>
          </div>
          <div className="cart-prod-2-data-2">
            <p></p>
            <p> Qty:{props.Quantity}</p>
            <p> Size:{props.size}</p>
            <p> KES {Math.round(props.price * 122.88).toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CartCard };

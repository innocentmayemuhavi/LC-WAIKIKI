import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartCard } from "../Cards/CartCard";
import { AuthContext } from "../Context";
import Header from "../Header";
import "./index.css";

const CartPage = () => {
  const { Cart } = useContext(AuthContext);

  const render = Cart.clothes.map((data) => <CartCard key={data.title+data.size} {...data}/>);

  return (
    <main className="fade">
      <Header />
      <section className="cart-header">
        <h3>Your Cart</h3>
        <p>({Cart.clothes.length} items)</p>
      </section>
      <section className="cart-body">{render}</section>
      <section className="cart-total">
        <div></div>
        <div className="data-1">
          <h4>
            Total: KES{" "}
            <span>{Math.round(Cart.total * 122.88).toLocaleString()}</span>
          </h4>
          <button>Check Out</button>
        </div>
      </section>
      <button className="checkout"> Check Out</button>
    </main>
  );
};

export default CartPage;

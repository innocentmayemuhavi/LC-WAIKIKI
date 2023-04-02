import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartCard } from "../Cards/CartCard";
import { AuthContext } from "../Context";
import Header from "../Header";
import "./index.css";

const CartPage = () => {
  const { Cart,dataStore } = useContext(AuthContext);
console.log(dataStore[0])
  const render = dataStore[0].map((data) => (
    <CartCard key={data.title + data.size} {...data} />
  ));

  return (
    <main className="fade">
      <Header />
      <section className="cart-header">
        <h3>Your Cart</h3>
        <p>({dataStore[0].length} items)</p>
      </section>
      <section className="cart-body">{render}</section>
      <section className="cart-total ">
        {dataStore[0].length > 0 && <div></div>}
        <div className="data-1">
          {dataStore[0].length > 0 && (
            <h4>
              Total: KES{" "}
              <span>{Math.round(dataStore[1]* 122.88).toLocaleString()}</span>
            </h4>
          )}
          {dataStore[0].length > 0 ? (
            <button>Check Out</button>
          ) : (
            <Link to={"/"}>
              <button>Add Products</button>
            </Link>
          )}
        </div>
      </section>
      <button className="checkout"> Check Out</button>
    </main>
  );
};

export default CartPage;

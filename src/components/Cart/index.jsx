import { Link } from "react-router-dom";
import { CartCard } from "../Cards/CartCard";
import Header from "../Header";
import "./index.css";
import { useSelector } from "react-redux";
const CartPage = () => {
  const stateData = useSelector((state) => state.cart.clothes);
  const totalPrice = useSelector((state) => state.cart.total);
  const render = stateData.map((data) => (
    <CartCard key={data.title + data.size} {...data} />
  ));
  return (
    <main className="fade">
      <Header />
      <section className="cart-header">
        <h3>Your Cart</h3>
        <p>({stateData.length} items)</p>
      </section>
      <section className="cart-body">{render}</section>
      <section className="cart-total ">
        {stateData.length > 0 && <div></div>}
        <div className="data-1">
          {stateData.length > 0 && (
            <h4>
              Total: KES{" "}
              <span>{Math.round(totalPrice * 122.88).toLocaleString()}</span>
            </h4>
          )}
          {stateData.length > 0 ? (
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

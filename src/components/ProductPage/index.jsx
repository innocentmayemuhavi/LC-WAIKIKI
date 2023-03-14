import { useContext } from "react";
import { AuthContext } from "../Context";
import Header from "../Header";
import "./index.css";
const ProductPage = () => {
  const { productPageData, setCart, Cart } = useContext(AuthContext);

  const AddToCart = (item) => {
    const newCart = Cart.clothes;
    newCart.push(productPageData);
    setCart((prev) => {
      return {
        ...prev,
        clothes: newCart,
        total: newCart.reduce((prev, curr) => {
          return prev + curr.price;
        }, 0),
      };
    });
  };
  return (
    <main className="fade">
      <Header />
      <section className="product-page">
        <div className="product-page-image">
          <img src={productPageData.largeimage}></img>
        </div>
        <div className="product-page-data">
          <h2>{productPageData.title}</h2>
          <p>
            KES.{Math.round(productPageData.price * 122.88).toLocaleString()}
          </p>
          <hr />
          <div className="prod-input">
            <label htmlFor="size" className="label">
              Size
            </label>
            <select>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>Xl</option>
            </select>
          </div>
          <hr />
          <div className="prod-input">
            <label htmlFor="quantity" className="label">
              Quantity
            </label>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
          </div>
          <hr />

          <div>
            <h3>Description</h3>
            <button onClick={() => AddToCart(productPageData)}>
              Add To Cart
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export { ProductPage };

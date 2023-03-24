import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context";
import Header from "../Header";
import { Notification } from "../Notification";
import "./index.css";
const ProductPage = () => {
  const {
    productPageData,
    setCart,
    Cart,
    setProductPageData,
    setNotificationData,
    setShowNotification,
    shownotification,
    notificationData,
  } = useContext(AuthContext);
  const [data, setdata] = useState({
    size: "S",
    Quantity: 1,
  });

  console.log(data.Quantity * 1);
  const handleChange = (event) => {
    const { name, value } = event.target;

    setdata((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    setProductPageData((prev) => {
      return {
        ...prev,
        Quantity: data.Quantity * 1,
        size: data.size,
      };
    });
  }, [data]);

  const AddToCart = (item) => {
    const verifyItem = Cart.clothes.find(
      (data1) =>
        data1.title === productPageData.title &&
        data1.size === productPageData.size
    );
    if (verifyItem) {
      console.log("here");
      setNotificationData({
        text1: "The Product ",
        text2: productPageData.title,
        text3: productPageData.size,
        text4: "Already Exist",
      });
      setShowNotification(true);
    } else {
      console.log("not here");
      const newCart = Cart.clothes;
      newCart.push(productPageData);

      setCart((prev) => {
        return {
          ...prev,
          clothes: newCart,
          total: newCart.reduce((prev, curr) => {
            return prev + curr.price * curr.Quantity;
          }, 0),
        };
      });
      setNotificationData({
        text1: "You have added ",
        text2: productPageData.title,
        text3: productPageData.size,
        text4: "to Cart",
      });
      setShowNotification(true);
    }
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
            <select onChange={handleChange} name="size">
              <option value={"S"}>S</option>
              <option value={"M"}>M</option>
              <option value={"L"}>L</option>
              <option value={"XL"}>XL</option>
            </select>
          </div>
          <hr />
          <div className="prod-input">
            <label htmlFor="quantity" className="label">
              Quantity
            </label>
            <select onChange={handleChange} name="Quantity">
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
            </select>
          </div>
          <hr />

          <div className="product-data-div">
            <h3>Description</h3>
            <button onClick={() => AddToCart(productPageData)}>
              Add To Cart
            </button>
          </div>
        </div>
      </section>
      <button
        className="add-to-cart"
        onClick={() => AddToCart(productPageData)}
      >
        {" "}
        Add To Cart
      </button>
      {shownotification && <Notification />}
    </main>
  );
};

export { ProductPage };

import "./index.css";
import { useState, useEffect, useContext } from "react";
import { PhoneNavigation } from "../Navigation";
import { AuthContext } from "../Context";
import { Link } from "react-router-dom";
import { DeskTopNav } from "../Navigation/DeskTopNavigation";

const Header = () => {
  const { showPhoneNav, setShowPhoneNav, Cart } = useContext(AuthContext);
  const [width, setwidth] = useState(window.innerWidth);
  useEffect(() => {
    function watchwidth() {
      setwidth(window.innerWidth);
    }
    window.addEventListener("resize", () => {
      watchwidth();
    });
    return () => {
      window.removeEventListener("resize", () => {
        watchwidth();
      });
    };
  }, []);

  const windowwidth = window.innerWidth;
  return (
    <header>
   
      <section
        style={{
          position: windowwidth > 1000 ? "static" : "fixed",
        }}
        className="header"
      >
        {showPhoneNav && windowwidth < 1000 && <PhoneNavigation />}
        {windowwidth <= 1000 ? (
          <div
            className="menu-icon"
            onClick={() => setShowPhoneNav((prev) => !prev)}
          >
            <img src="../../../../images/icons/hamburger.png" />
          </div>
        ) : (
          <div></div>
        )}
        <div className="shop-title">
          <Link to={"/"}>
            <h3>SHOP</h3>
          </Link>
        </div>
        <div className="cart-icon">
          {Cart.clothes.length > 0 && (
            <div className="cart-items-count">
              <p>{Cart.clothes.length}</p>
            </div>
          )}
         <Link to={'/cart'}> <img src="../../../../images/icons/shopping-cart.png"></img></Link>
        </div>
      </section>
      {windowwidth > 1000 && <DeskTopNav />}
    </header>
  );
};

export default Header;

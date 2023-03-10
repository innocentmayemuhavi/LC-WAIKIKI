import "./index.css";
import { useState, useEffect, useContext } from "react";
import { PhoneNavigation } from "../Navigation";
import { AuthContext } from "../Context";
const Header = () => {
  const { showPhoneNav, setShowPhoneNav } = useContext(AuthContext);
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
    <header
      style={{
        position: windowwidth > 1000 ? "static" : "fixed",
      }}
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
        <h3>SHOP</h3>
      </div>
      <div className="cart-icon">
        <div className="cart-items-count"><p>5</p></div>
        <img src="../../../../images/icons/shopping-cart.png"></img>
      </div>
     
    </header>
  );
};

export default Header;

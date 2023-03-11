import "./index.css";
import { useState, useEffect, useContext } from "react";
import { PhoneNavigation } from "../Navigation";
import { AuthContext } from "../Context";
import { Link } from "react-router-dom";
const Header = () => {
  const { showPhoneNav, setShowPhoneNav,Cart } = useContext(AuthContext);
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
        <Link to={'/'}><h3>SHOP</h3></Link>
      </div>
      <div className="cart-icon">
       {Cart.clothes.length>0&&<div className="cart-items-count"><p>{Cart.clothes.length}</p></div>} 
        <img src="../../../../images/icons/shopping-cart.png"></img>
      </div>
     
    </header>
  );
};

export default Header;

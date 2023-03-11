import "./index.css";
import { useContext } from "react";
import { AuthContext } from "../Context";
import { Link } from "react-router-dom";
const PhoneNavigation = () => {
  const { setShowPhoneNav } = useContext(AuthContext);
  return (
    <section className="phone-navigation-overlay">
      <section className="phone-navigation">
        <ul>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              onClick={() => setShowPhoneNav(false)}
            >
              <path
                fill-rule="evenodd"
                d="M10.78 19.03a.75.75 0 01-1.06 0l-6.25-6.25a.75.75 0 010-1.06l6.25-6.25a.75.75 0 111.06 1.06L5.81 11.5h14.44a.75.75 0 010 1.5H5.81l4.97 4.97a.75.75 0 010 1.06z"
              ></path>
            </svg>
          </div>
          <h3>SHOP</h3>
          <hr />
          <Link to={"/mensoutwear"}>
            <li onClick={() => setShowPhoneNav(false)}>Men's Outwear</li>
          </Link>
          <hr />
          <li onClick={() => setShowPhoneNav(false)}>Ladies' Outwear</li>
          <hr />
          <li onClick={() => setShowPhoneNav(false)}>Men's T-Shirts</li>
          <hr />
          <li onClick={() => setShowPhoneNav(false)}>Ladies' T-Shirts</li>
          <hr />
          <li onClick={() => setShowPhoneNav(false)}>Laptop Backpacks</li>
          <hr />
        </ul>
      </section>
    </section>
  );
};

export { PhoneNavigation };

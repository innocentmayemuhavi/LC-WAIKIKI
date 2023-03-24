import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context";
import "./index.css";
const Notification = () => {
  const { setShowNotification, notificationData } = useContext(AuthContext);
 
 
  return (
    <section className="notification">
      <div className="notification-header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          onClick={() => setShowNotification(false)}
        >
          <path d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06Z"></path>
        </svg>
      </div>
      <div className="notification-body">
        <p>
          {notificationData.text1} <strong>{notificationData.text2}</strong> of
          size <strong>{notificationData.text3}</strong>{" "}
          {notificationData.text4}.{" "}
        </p>
      </div>

      <div className="notification-footer">
        <Link to={"/cart"}>
          {" "}
          <button>View Cart</button>
        </Link>
        <Link to={""}>
          {" "}
          <button>Check Out</button>
        </Link>
      </div>
    </section>
  );
};

export { Notification };

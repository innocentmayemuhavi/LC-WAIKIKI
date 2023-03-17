import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({
  User: {
    name: "",
    email: "",
  },
  setUser: () => {},
  isLoading: true,
  setIsLoading: () => {},
  showPhoneNav: false,
  setShowPhoneNav: () => {},
  Cart: {
    clothes: [],
    total: 0,
  },
  productPageData: {},
  setProductPageData: () => {},
  setCart: () => {},
  notificationData: {},
  setNotificationData: () => {},
  shownotification: false,
  setShowNotification: () => {},
});

const AuthProvider = ({ children }) => {
  const [User, setUser] = useState({
    name: "",
    email: "",
  });
  const [showPhoneNav, setShowPhoneNav] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [productPageData, setProductPageData] = useState({});
  const [Cart, setCart] = useState({
    clothes: [],
    total: 0,
  });
  const [notificationData, setNotificationData] = useState({});
  const [shownotification, setShowNotification] = useState(false);

  useEffect(() => {
    const savedCart =
      localStorage.getItem("Cart") === "undefined"
        ? {
            clothes: [],
            total: 0,
          }
        : JSON.parse(localStorage.getItem("Cart"));
    setCart(savedCart);
  }, []);

  useEffect(() => {
    if (Cart.clothes) {
      localStorage.setItem("Cart", JSON.stringify(Cart));
    }
  }, [Cart]);

  useEffect(() => {
    const savedProduct =
      localStorage.getItem("product") === "undefined"
        ? {
            clothes: [],
            total: 0,
          }
        : JSON.parse(localStorage.getItem("product"));
    setProductPageData(savedProduct);
  }, []);

  useEffect(() => {
    if (productPageData) {
      localStorage.setItem("product", JSON.stringify(productPageData));
    }
  }, [productPageData]);
  return (
    <AuthContext.Provider
      value={{
        User,
        setUser,
        isLoading,
        setIsLoading,
        showPhoneNav,
        setShowPhoneNav,
        Cart,
        setCart,
        productPageData,
        setProductPageData,
        shownotification,
        setNotificationData,
        setShowNotification,
        notificationData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

import { createContext, useEffect, useState } from "react";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
  update,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseUrl: "https://maye-a3160-default-rtdb.firebaseio.com/",
  projectId: "maye-a3160",
};

const app = initializeApp(appSettings);
const dB = getDatabase(app);

const dataList = ref(dB, "data");

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
  dataStore: [[], []],
  setDataStore: () => {},
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
  const [dataStore, setDataStore] = useState([[], [0]]);

  useEffect(() => {
    onValue(dataList, (snapshot) => {
      const onlineData = Object.values(snapshot.val());
      onlineData === "undefined"
        ? update(dataList, [[], [0]])
        : setDataStore(Object.values(snapshot.val()));
    });
    const savedCart =
      localStorage.getItem("Cart") === "undefined"
        ? {
            clothes: [],
            total: 0,
          }
        : JSON.parse(localStorage.getItem("Cart"));

    setCart(savedCart);

    onValue(dataList, (snapshot) => {
      const onlineData = Object.values(snapshot.val());
      console.log(Object.keys(snapshot.val()));
      onlineData &&
        setCart((prev) => {
          return {
            ...prev,
            clothes: onlineData[0],
            total: onlineData[1],
          };
        });
    });
  }, []);

  useEffect(() => {
    if (Cart.clothes) {
      localStorage.setItem("Cart", JSON.stringify(Cart));
      if (dataStore === "undefined") {
        setDataStore([[], [0]]);
      } else {
        update(dataList, Cart);
      }
      update(dataList, Cart);

      onValue(dataList, (snapshot) => {
        Cart.clothes.length === 0
          ? setDataStore([[], [0]])
          : setDataStore(Object.values(snapshot.val()));
      });
    } else {
      setCart({
        clothes: [],
        total: 0,
      });
      setDataStore[([], [])];
    }
  }, [Cart]);

  useEffect(() => {
    const savedProduct =
      localStorage.getItem("product") === "undefined"
        ? {}
        : JSON.parse(localStorage.getItem("product"));
    setProductPageData(savedProduct);
  }, []);

  useEffect(() => {
    if (productPageData) {
      localStorage.setItem("product", JSON.stringify(productPageData));
    }
  }, [productPageData]);
  if (notificationData) {
    useEffect(() => {
      setInterval(() => setShowNotification(false), 5000);
      return () => {
        setShowNotification(false);
      };
    }, [Notification]);
  }
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
        dataStore,
        setDataStore,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

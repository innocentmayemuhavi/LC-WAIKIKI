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
  setCart: () => {},
});

const AuthProvider = ({ children }) => {
  const [User, setUser] = useState({
    name: "",
    email: "",
  });
  const [showPhoneNav, setShowPhoneNav] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [Cart, setCart] = useState({
    clothes: [],
    total: 0,
  });

  useEffect(() => {
    const savedCart =
      localStorage.getItem("Cart") === "undefined"
        ? {
            clothes: [],
            total: 0,
          }
        : JSON.parse(localStorage.getItem("Cart"));
   setCart(savedCart)

  }, []);

  useEffect(()=>{
if(Cart.clothes){
  localStorage.setItem("Cart",JSON.stringify(Cart))
}
  },[Cart])
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

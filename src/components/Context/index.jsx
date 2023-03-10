import { createContext, useState } from "react";

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
});

const AuthProvider = ({ children }) => {
  const [User, setUser] = useState({
    name: "",
    email: "",
  });
  const [showPhoneNav, setShowPhoneNav] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <AuthContext.Provider
      value={{
        User,
        setUser,
        isLoading,
        setIsLoading,
        showPhoneNav,
        setShowPhoneNav,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

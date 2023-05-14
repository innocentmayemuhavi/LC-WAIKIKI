import React from "react";
import App from "../App/App";
import "../../assets/styles/index.css";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "../store";
import { AuthProvider } from "../Context";
const rootElement = createRoot(document.getElementById("root"));
rootElement.render(
  <Provider store={store}>
    <App />
  </Provider>
);

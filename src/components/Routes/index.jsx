import * as React from "react";
import { Route, Routes } from "react-router-dom";
import CartPage from "../Cart";
import HomePage from "../Home";
import LadiesOutwear from "../LadiesOutwear copy 2";
import LadiesTshirts from "../ladiesT-shirts";
import LaptopBackPacks from "../laptopbackpacks";
import MensOutwear from "../MensOutwear";
import MensTshirts from "../MensTshirts";
import { ProductPage } from "../ProductPage";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mensoutwear" element={<MensOutwear />} />
      <Route path="/ladiesoutwear" element={<LadiesOutwear />} />
      <Route path="/menstshirts" element={<MensTshirts />} />
      <Route path="/ladiestshirts" element={<LadiesTshirts />} />
      <Route path="/laptopbackpacks" element={<LaptopBackPacks />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
  );
};

export { RoutesComponent };

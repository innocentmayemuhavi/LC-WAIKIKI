import * as React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Home";
import MensOutwear from "../MensOutwear";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mensoutwear" element={<MensOutwear />} />
    </Routes>
  );
};

export { RoutesComponent };

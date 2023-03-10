import * as React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Home";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export { RoutesComponent };

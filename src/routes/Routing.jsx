import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./Routes";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppWrapper from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter> {/* ✅ Keep BrowserRouter only here */}
    <React.StrictMode>
      <AppWrapper />
    </React.StrictMode>
  </BrowserRouter>
);

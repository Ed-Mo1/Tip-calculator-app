import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TipProvidor from "./context/TipProvidor.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TipProvidor>
    <App />
  </TipProvidor>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UserProvider from "./Contexts/UserProvider";
import ProductProvider, { ProductContext } from "./Contexts/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ProductProvider>
        <UserProvider>
            <App />
        </UserProvider>
    </ProductProvider>
);

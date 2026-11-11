import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Welcome from "./Myapp.jsx";
import Product from "./Product.jsx";
import DiscountCalculator from "./DiscountCalculator.jsx";
//import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Welcome name="James" />
    <Product productName="Laptop" price={800} />
    <DiscountCalculator productName="Mouse" price={80} />
    {/* <App /> */}
  </StrictMode>,
);

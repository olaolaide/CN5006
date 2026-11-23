import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

//import App from './App';
import MyApp from "./MyApp";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MyApp />
    </BrowserRouter>
  </StrictMode>,
);

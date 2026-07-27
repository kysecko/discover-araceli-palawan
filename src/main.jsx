import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 800,
  easing: "ease-out-cubic",
  once: true,
  offset: 60,
});

window.addEventListener("load", () => {
  AOS.refresh();
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div className="font-poppins bg-background">
        <App />
      </div>
    </BrowserRouter>
  </StrictMode>,
);
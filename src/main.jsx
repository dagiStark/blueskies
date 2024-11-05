import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";


import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS for initialization

import App from "./App.jsx";

function Main() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<Main />);

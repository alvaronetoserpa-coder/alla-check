import React from "react";
import { createRoot } from "react-dom/client";
import AllaCheckApp from "./alla-check.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AllaCheckApp />
  </React.StrictMode>
);

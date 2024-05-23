import "./index.css";
import React from "react";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";

import { GlobalProvider } from "./contexts/GlobalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);

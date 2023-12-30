import React from "react";
import ReactDOM from "react-dom/client";
import routes from "./routes/routes.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProviders from "./providers/AuthProviders.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={routes} />
    </AuthProviders>
  </React.StrictMode>
);

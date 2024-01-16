import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes.jsx";
import AuthProviders from "./providers/AuthProviders.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders >
      <ToastContainer position="top-center" />
      <RouterProvider router={routes} />
    </AuthProviders>
  </React.StrictMode>
);

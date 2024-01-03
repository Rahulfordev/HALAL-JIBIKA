import React from "react";
import ReactDOM from "react-dom/client";
import routes from "./routes/routes.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import AuthProviders from "./providers/AuthProviders.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <ToastContainer position="top-center" />
      <RouterProvider router={routes} />
    </AuthProviders>
  </React.StrictMode>
);

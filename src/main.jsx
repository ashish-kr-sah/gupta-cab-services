import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import "./styles/base.css";
import { prefetchReviews } from "./reviewsStore";

// Start loading reviews immediately on pages that show them
if (["/", "/testimonials"].includes(window.location.pathname)) {
  prefetchReviews();
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />

    <ToastContainer
      position="top-right"
      theme="dark"
      autoClose={3500}
    />
  </BrowserRouter>
);
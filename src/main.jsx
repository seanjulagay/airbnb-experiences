import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import Gallery from "./assets/components/Gallery";
import "./assets/styles/resets.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Gallery />
  </React.StrictMode>
);

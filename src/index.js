import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import History from "./components/History";
import Products from "./components/Products";
import NextPageProducts from "./components/NextPageProducts";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header";
import Footer from "./components/Footer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <BrowserRouter History={History}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/:name" element={<Products />} />
        <Route path="moreproducts" element={<NextPageProducts />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

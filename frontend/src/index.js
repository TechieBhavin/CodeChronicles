import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Home from "./LandingPage/HomePage/HomePage";
import About from "./LandingPage/AboutPage/AboutPage";
import Categories from "./LandingPage/CategoriesPage/hero";
import Navbar from "./LandingPage/Navbar";
import Footer from "./LandingPage/Footer";
import Notfound from "./LandingPage/NotfoundPage/hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./LandingPage/ProfilePage/hero";
import Dsa from "./LandingPage/CategoryDetailPage/dsa/hero";
import Cn from "./LandingPage/CategoryDetailPage/cn/hero";
import Oops from "./LandingPage/CategoryDetailPage/oops/hero";
import Os from "./LandingPage/CategoryDetailPage/os/hero";
import DBMS from "./LandingPage/CategoryDetailPage/dbms/hero";

// import Sidebar from "./LandingPage/HomePage/Sidebar";

import BlogDetailcn from "./LandingPage/CategoryDetailPage/cn/BlogDetail";
import BlogDetaildsa from "./LandingPage/CategoryDetailPage/dsa/BlogDetail";
import BlogDetaildbms from "./LandingPage/CategoryDetailPage/dbms/BlogDetail";
import BlogDetailsoops from "./LandingPage/CategoryDetailPage/oops/BlogDetail";
import BlogDetailsos from "./LandingPage/CategoryDetailPage/os/BlogDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    {/* <Sidebar /> */}
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/Categories" element={<Categories />}></Route>
      <Route path="*" element={<Notfound />}></Route>
      <Route path="/my-profile" element={<ProfilePage />}></Route>

      {/* Categories Routes */}

      <Route path="/categories/dsa" element={<Dsa />}></Route>
      <Route path="/categories/cn" element={<Cn />}></Route>
      <Route path="/categories/oops" element={<Oops />}></Route>
      <Route path="/categories/os" element={<Os />}></Route>
      <Route path="/categories/dbms" element={<DBMS />}></Route>

      {/* category wise blogs list page Routes */}

      {/* <Route path="/cp-digest/intro" element={<h1>Intro</h1>} />
      <Route path="/cp-digest/features" element={<h1>Features</h1>} />
      <Route path="/decoding-cp" element={<h1>Decoding CP</h1>} /> */}

      <Route path="/categories/cn/blog/:slug" element={<BlogDetailcn />} />
      <Route path="/categories/dsa/blog/:slug" element={<BlogDetaildsa />} />
      <Route path="/categories/dbms/blog/:slug" element={<BlogDetaildbms />} />
      <Route path="/categories/oops/blog/:slug" element={<BlogDetailsoops />} />
      <Route path="/categories/os/blog/:slug" element={<BlogDetailsos />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

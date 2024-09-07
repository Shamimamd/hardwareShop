// App.js

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar1 from "./Navbar1";

const Home = () => <h1>Home Page</h1>; // Example component for Home
const Pages = () => <h1>Pages Page</h1>; // Example component for Pages
// Define other components for Services, Blog, Contact, Search

const NavbarParent = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar1 />

        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/pages" component={Pages} />
          {/* Add routes for Services, Blog, Contact, Search */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default NavbarParent;

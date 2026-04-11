import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 style={{ fontSize: "30px", marginBottom: "0px" }}>PetPals</h1>
        <span>Adventure Catalog</span>
      </Link>

      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact Us</Link>
    </nav>
  );
};

export default Nav;

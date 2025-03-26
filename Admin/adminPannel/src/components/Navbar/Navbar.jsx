import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="heading-logo">Foodie Finds</h2>
      <div className="navbar-right">
        <img src="/public/admin.png" alt="Admin Avatar" className="admin-avatar" />
        <span className="admin-name">Admin</span>
      </div>
    </div>
  );
};

export default Navbar;

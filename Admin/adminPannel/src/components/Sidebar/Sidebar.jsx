import React from "react";
import "./Sidebar.css";
import { CiBookmarkPlus } from "react-icons/ci";
import { FaCartArrowDown, FaClipboardList } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Admin Panel</h2>
      </div>
      <div className="sidebar-options">

        <NavLink  to= "/add" className="sidebar-option">
          <CiBookmarkPlus className="icon" />
          <p>Add Items</p>
        </NavLink>

        <NavLink to="/list" className="sidebar-option">
          <FaCartArrowDown className="icon" />
         <p>Order List</p>
        </NavLink>

        <NavLink to="/order" className="sidebar-option">
          <FaClipboardList className="icon" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;

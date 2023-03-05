import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <nav>
      <img src="/src/assets/react.svg" alt="react-logo" />
      <div className="links-container">
        <Link to="/">Home</Link>
        <Link to="/edit-group">Edit Group</Link>
        <Link to="/groups">Groups</Link>
      </div>
    </nav>
  );
};

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <div className="navbar bg-neutral text-white">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">SAZZAD</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/me">About Me</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li tabIndex={0}>
              
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Navbar;

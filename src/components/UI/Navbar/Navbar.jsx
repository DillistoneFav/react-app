import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
        <div className="navbarItems">
          <Link to="/about" className="RouterLinks" >ABOUT</Link>
          <Link to="/posts" className="RouterLinks" >POSTS</Link>
        </div>
      </div>
    );
};

export default Navbar;
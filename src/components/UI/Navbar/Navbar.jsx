import React from 'react';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../context';

const Navbar = () => {
    const {isAuth, setIsAuth, loggedName} = useContext(AuthContext)
    const logout = () => {
      setIsAuth(false);
      localStorage.removeItem('auth');
    }
    return (
        <div className="navbar">
          <div className="navbarItems">
            <Link to="/about" className="RouterLinks" >ABOUT</Link>
            <Link to="/posts" className="RouterLinks" >POSTS</Link>
            {isAuth ?
              <div className="RouterLinks" onClick={logout}>logout(logged as {loggedName})</div>
              : null
            }
          </div>

      </div>
    );
};

export default Navbar;
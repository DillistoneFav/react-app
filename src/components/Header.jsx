import React from 'react';
import {
    Route,
    Routes,
    Navigate,
  } from "react-router-dom";
  import About from '../pages/About';
  import Posts from '../pages/Posts';
  import Error from '../pages/Error';
  import PostIDPage from '../pages/PostIDPage';
  import Navbar from '../components/UI/Navbar/Navbar';

const Header = () => {
    return (
        <div>
          <Navbar/>
            <Routes>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/posts" exact element={<Posts/>}></Route>
              <Route path="/posts/:id" exact element={<PostIDPage/>}></Route>
              <Route path="/error" element={<Error/>}></Route>
              <Route path="*" element={<Navigate to="/posts" replace />}></Route>
            </Routes>
        </div>
    );
};

export default Header;
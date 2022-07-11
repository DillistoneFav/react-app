import React from 'react';
import { useContext } from 'react';
import {
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from '../components/UI/Navbar/Navbar';
import { AuthContext } from './context';

import { publicRoutes, privateRoutes } from './router/routes';
import Loader from './UI/loader/loader';

const Header = () => {
  const {isAuth, isLoading} = useContext(AuthContext)
  if (isLoading) {
    return <Loader/>
  }
  return (
    <div>
      <Navbar/>
          { isAuth 
          ? <Routes>
              {privateRoutes.map(item => 
                <Route path={item.path} element={<item.component/>} exact={item.exact} key={item.path}></Route>
              )}
              <Route path="*" element={<Navigate to="/posts" replace />}></Route>
            </Routes>
            : 
            <Routes>
              {publicRoutes.map(item => 
              <Route path={item.path} element={<item.component/>} exact={item.exact} key={item.path}></Route>
              )}
              <Route path="*" element={<Navigate to="/authorization" replace />}></Route>
            </Routes>
          }
    </div>
  )
};

export default Header;
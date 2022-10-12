import React from "react";
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  return (
   <header>
  
        <Link to="/">
          <h1>Dream Spots</h1>
        </Link>
      
      <nav>
        {Auth.loggedIn() ? (
          <>
          <Link to="/spots" style={{color: '#f6b092', fontSize: '24px', marginRight: '18px', cursor: 'pointer'}}>Find a spot</Link>
          <Link to="/favourites" style={{color: '#f6b092', fontSize: '24px', marginRight: '18px', cursor: 'pointer'}}>My dreamspots</Link>
          <a href="/" style={{color: '#f6b092', fontSize: '24px', marginRight: '18px', cursor: 'pointer'}} onClick={logout}>
                Logout
              </a>
          </>
        ) : (
          <>
           <Link to="/spots" style={{color: '#f6b092', fontSize: '18px', marginRight: '10px', cursor: 'pointer'}}>Find a spot</Link>
          <Link to="/favourites" style={{color: '#f6b092', fontSize: '18px', marginRight: '10px', cursor: 'pointer'}}>My dreamspots</Link>
         <Link to="/login" style={{color: '#f6b092', fontSize: '18px', marginRight: '10px', cursor: 'pointer'}}>Login</Link>
          </>
        )}
       
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import "../assets/css/style.css";
import { useNavigate } from "react-router-dom";
const Header = ({isLoggedIn, setIsAuth}) => {
  const navigate  = useNavigate();  
  return (
   <header>
      <h1>
        <a href="/">Dream Spots</a>
      </h1>
      <nav>
        {isLoggedIn && <ul>
          <li>
            <div style={{color: '#f6b092', fontSize: '24px', marginRight: '18px', cursor: 'pointer'}} onClick={() => navigate('/favorites')}>My Favourite Spots</div>
          </li>
          <li>
            <div style={{color: '#f6b092', fontSize: '24px', cursor: 'pointer'}}  onClick={() => {
            localStorage.clear();
            setIsAuth(false)
            navigate('/')
          }}>Logout</div>
          </li>
        </ul>}
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import "../assets/css/style.css";
import { useNavigate } from "react-router-dom";
const Header = ({isLoggedIn}) => {
  const navigate  = useNavigate()
  return (
    <header>
      <h1>
        <a href="/">Dream Spots</a>
      </h1>
      <nav>
        {isLoggedIn && <ul>
          <li>
            <a href="/">Find a spot</a>
          </li>
          <li>
            <a href="/">My dream spots</a>
          </li>
          <li onClick={() => {
            if(!isLoggedIn){
              navigate('/')
            }
            if(isLoggedIn){
              console.log('loggedout')
              //Todo Call API to log user Out
            }
          }}>
            <a href="/">
             Logout
            </a>
          </li>
        </ul>}
      </nav>
    </header>
  );
};

export default Header;

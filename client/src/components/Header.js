import React from "react";
import "../assets/css/style.css";

const Header = () => {
  return (
    <header>
      <h1>
        <a href="/">Dream Spots</a>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="/">Find a spot</a>
          </li>
          <li>
            <a href="/">My dream spots</a>
          </li>
          <li>
            <a href="/">Logout</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import FrontPage from "./pages/FrontPage";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginOrSignup from "./components/LoginOrSignup";
import FavouriteSpots from "./components/FavouriteSpots";
import "./assets/css/style.css";
function App() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if(localStorage.getItem('_id')){
      setIsAuth(true)
    }
  }, [])
  return (
    <div className="body">
      <BrowserRouter>
        <Header isLoggedIn={isAuth} setIsAuth={setIsAuth}/>
        <Routes>
          <Route path="/" element={<LoginOrSignup isLoggedIn={isAuth} />} />
          <Route
            path="/login"
            element={<LoginPage type="login" setIsAuth={setIsAuth} />}
          />
          <Route
            path="/signup"
            element={<LoginPage type="signup" setIsAuth={setIsAuth} />}
          />
          <Route
            path="/spots"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <FrontPage isAuth={isAuth} type="vacations" />
              </ProtectedRoute>
            }
          />
          <Route
            path="/favorites"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <FavouriteSpots type="userFavorites" isAuth={isAuth} />
              </ProtectedRoute>
            }
          />
          <Route path="/*" element={<div>Error Page</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React, {useEffect, useState} from "react";
import FrontPage from "./pages/FrontPage";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute"
import LoginOrSignup from "./components/LoginOrSignup"
function App() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    //Todo- call auth API, set Return to setIsAuth
    setIsAuth(false)
  } , [])
  return (
    <div className="body">
    <BrowserRouter>
        <Header isLoggedIn={isAuth} />
        <Routes>
          <Route
            path="/"
            element={
                <LoginOrSignup isLoggedIn={isAuth} />
            }
          />
          <Route path='/login' element={<LoginPage type='login' setIsAuth={setIsAuth} />} /> 
          <Route path='/signup' element={<LoginPage type='signup' setIsAuth={setIsAuth} />} /> 
          <Route path='/spots' element={<FrontPage isAuth={isAuth} type='vacations' />} />
          <Route
            path="favorites"
            element={
              <ProtectedRoute isAuth={isAuth}>
               <FrontPage type='userFavorites' />
              </ProtectedRoute>
          }
        />
        <Route path='/*' element={<div>Error Page</div>} /> 
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

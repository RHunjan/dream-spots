// import React, { useEffect, useState } from "react";

import FrontPage from "./pages/FrontPage";
import EntryPage from "./pages/EntryPage";
import Header from "./components/Header";
// import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import LoginPage from "./components/LoginPage";
// import ProtectedRoute from "./components/ProtectedRoute";
import LoginOrSignup from "./components/LoginOrSignup";
import FavouriteSpots from "./components/FavouriteSpots";
import "./assets/css/style.css";

const httpLink = createHttpLink({
  uri: process.env.NODE_ENV === 'development' ? "http://localhost:3001/graphql" : '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // const [isAuth, setIsAuth] = useState(false);
  // useEffect(() => {
    //   if(localStorage.getItem('_id')){
      //     setIsAuth(true)
  //   }
  // }, [])
  return (
    <ApolloProvider client={client}>
      <Router>
    <div className="body">
        <Header />
        <Routes>
          <Route path="/" element={<LoginOrSignup />} />
          <Route
            path="/login"
            element={<LoginPage />}
          />
          <Route
            path="/signup"
            element={<LoginPage />}
          />
          <Route
            path="/spots"
            element={
                <FrontPage />
            }
          />
          <Route
            path="/favourites"
            element={
                <FavouriteSpots />
            }
          />
          <Route path="/*" element={<div>Error Page</div>} />
        </Routes>
    </div>
    {/* <Footer /> */}
      </Router>
      </ApolloProvider>
  );
}

export default App;

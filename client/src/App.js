import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FrontPage from "./pages/FrontPage";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Grid container>
                <FrontPage type="vacations"/>
              </Grid>
            }
          />
          <Route path="favorites" element={<FrontPage type='userFavorites' />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;

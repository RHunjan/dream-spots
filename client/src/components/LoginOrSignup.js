import React, {useEffect, useState} from "react";
import { Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const LoginOrSignup = ({isLoggedIn}) => {
  const navigate = useNavigate();
    useEffect(() => {
        if(isLoggedIn){
            navigate('/spots')
        }
    }, [isLoggedIn, navigate])
  return (
    <Grid item sx={{ margin: "auto", width: "200px", marginTop: "30px" }}>
      <Grid sx={{ marginTop: "30px" }}>
        <Button
          onClick={() => navigate("/login")}
          style={{
            backgroundColor: "#f6a192",
          }}
          sx={{ width: "194px" }}
          variant="contained"
        >
          Login
        </Button>
      </Grid>
      <Grid sx={{ marginTop: "30px" }}>
        <Button
          onClick={() => navigate("/signup")}
          style={{
            backgroundColor: "#f6a192",
          }}
          sx={{ width: "194px" }}
          variant="contained"
        >
          Sign up
        </Button>
      </Grid>
    </Grid>
  );
};

export default LoginOrSignup;

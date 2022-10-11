import React from "react";
import { useState, useEffect } from "react";
import { TextField, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const LoginPage = ({ type, setIsAuth }) => {
    const navigate= useNavigate()
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    //Todo if the user logged in navigate to the FrontPage
  }, [userInfo]);

    return (
        <Grid item sx={{ margin: "auto", width: "200px", marginTop: "30px" }}>
           <Grid sx={{ marginBottom: "30px" }}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
          </Grid>
          {type === "signup" && <Grid sx={{ marginBottom: "30px" }}>
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
            />
          </Grid>}
          <Grid>
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
          </Grid>
          <Grid sx={{ marginTop: "30px" }}>
            <Button
                onClick={() => {setIsAuth(true);
                navigate('/spots')
                }}
                style={{
                    backgroundColor: "#f6a192",
                }}
              sx={{ width: "194px"}}
              variant="contained"
            >
              {type==='login' ? 'Login' : 'Sign Up'}
            </Button>
          </Grid>
          <Grid sx={{ marginTop: "30px" }}>
            <Button
                onClick={() =>  navigate('/')}
                style={{
                    backgroundColor: "#f6a192",
                }}
              sx={{ width: "194px"}}
              variant="contained"
            >
              Back
            </Button>
          </Grid>
        </Grid>
    );
};

export default LoginPage;

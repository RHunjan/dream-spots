import React from "react";
import { useState, useEffect } from "react";
import { TextField, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER, LOGIN } from "../utils/queries";
import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';

const LoginPage = ({ type, setIsAuth }) => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [addUser] = useMutation(ADD_USER);
  const [login] = useMutation(LOGIN);
    console.log(type)
  const loginPageSchema = Yup.object().shape({
    email: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });
  const signUpPageSchema = Yup.object().shape({
    email: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    username: Yup.string().email('Invalid email').required('Required'),
  });
  const submitInfo = () => {
    // addUser({variables: {username: 'neetSabharwal2', password: 'neetsb2', email: 'neet2@gmail.com'}})
    login({
      variables: { email: "neet2@gmail.com", password: "neetsb2" },
    }).then((res) => console.log(res));
  };
  useEffect(() => {
    //Todo if the user logged in navigate to the FrontPage
  }, [userInfo]);
  const loginInitialValues  = {
    email: '',
    password: '',
  }
  const signUpInitialValues  = {
    email: '',
    password: '',
    username: ''
  }
  return (
    <Formik
      initialValues={type === 'signup' ? signUpInitialValues : loginInitialValues}
      validationSchema={type === 'signup' ? signUpPageSchema : loginPageSchema}
      onSubmit={async (values) => {
        // await new Promise((r) => setTimeout(r, 500));
        console.log(values)
      }}
    >
      <Form>
        <Grid item sx={{ margin: "auto", width: "200px", marginTop: "30px" }}>
          <Grid sx={{ marginBottom: "30px" }}>
            <TextField name="email" id="outlined-basic" label="Email" variant="outlined" />
          </Grid>
          {type === "signup" && (
            <Grid sx={{ marginBottom: "30px" }}>
              <TextField
                name='username'
                id="outlined-basic"
                label="Username"
                variant="outlined"
              />
            </Grid>
          )}
          <Grid>
            <TextField
              name='password'
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
          </Grid>
          <Grid sx={{ marginTop: "30px" }}>
            <Button
                type='submit'
            //   onClick={() => {
            //     setIsAuth(true);
            //     submitInfo();
            //     // navigate('/spots')
            //   }}
              style={{
                backgroundColor: "#f6a192",
              }}
              sx={{ width: "194px" }}
              variant="contained"
            >
              {type === "login" ? "Login" : "Sign Up"}
            </Button>
          </Grid>
          <Grid sx={{ marginTop: "30px" }}>
            <Button
              onClick={() => navigate("/")}
              style={{
                backgroundColor: "#f6a192",
              }}
              sx={{ width: "194px" }}
              variant="contained"
            >
              Back
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
};

export default LoginPage;

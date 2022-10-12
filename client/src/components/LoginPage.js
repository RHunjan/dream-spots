import React from "react";
import { useState } from "react";
import { Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER, LOGIN } from "../utils/queries";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const LoginPage = ({ type, setIsAuth }) => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [addUser] = useMutation(ADD_USER);
  const [login] = useMutation(LOGIN);
  const loginPageSchema = Yup.object().shape({
    email: Yup.string().email().required("Required"),
    password: Yup.string().min(2, "Too Short!").required("Required"),
  });
  const signUpPageSchema = Yup.object().shape({
    email: Yup.string().email().required("Required"),
    password: Yup.string().min(2, "Too Short!").required("Required"),
    username: Yup.string().required("Required"),
  });

//   useEffect(() => {
//     if (userInfo) {
//       navigate("/spots");
//     }
//   }, [navigate, userInfo]);
  const loginInitialValues = {
    email: "",
    password: "",
  };
  const signUpInitialValues = {
    email: "",
    password: "",
    username: "",
  };
  const FormikField = ({ fieldName, ...props }) => {
    return (
      <>
        <div style={{ color: "#f6a192" }}>
          {fieldName[0].toUpperCase() + fieldName.substring(1)}
        </div>
        <Field
          style={{
            width: "200px",
            border: "1px solid #f6a192",
            borderRadius: "2px",
            margin: "0",
          }}
          id={fieldName}
          name={fieldName}
          label={fieldName}
          type={fieldName}
        />
        {props.children}
      </>
    );
  };
  return (
    <Formik
      initialValues={
        type === "signup" ? signUpInitialValues : loginInitialValues
      }
      validationSchema={type === "signup" ? signUpPageSchema : loginPageSchema}
      onSubmit={(values) => {
        console.log(values);
        if (type === "login") {
          login({
            variables: { email: values.email, password: values.password },
          }).then((res) => {
            if (res.data) {
              setIsAuth(true);
              localStorage.setItem("token", res.data.login.token);
              localStorage.setItem("_id", res.data.login.user._id);
              setUserInfo(res.data);
              navigate("/spots");
            }
          });
        } else if (type === "signup") {
          addUser({
            variables: {
              email: values.email,
              password: values.password,
              username: values.username,
            },
          }).then((res) => {
            if (res.data) {
              setIsAuth(true);
              localStorage.setItem("token", res.data.addUser.token);
              localStorage.setItem("_id", res.data.addUser.user._id);
              setUserInfo(res.data);
              navigate("/spots");
            }
          });
        }
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Grid item sx={{ margin: "auto", width: "200px", marginTop: "30px" }}>
            <Grid sx={{ marginBottom: "30px" }}>
              <FormikField fieldName="email">
                <div style={{color: '#f6a192'}}>{errors.email}</div>
              </FormikField>
            </Grid>
            {type === "signup" && (
              <Grid sx={{ marginBottom: "30px" }}>
                <FormikField fieldName="username">
                  <div style={{color: '#f6a192'}}>{errors.username}</div>
                </FormikField>
              </Grid>
            )}
            <Grid>
              <FormikField fieldName="password">
                <div style={{color: '#f6a192'}}>{errors.password}</div>
              </FormikField>
            </Grid>
            <Grid sx={{ marginTop: "30px" }}>
              <Button
                type="submit"
                style={{
                  backgroundColor: "#f6a192",
                }}
                sx={{ width: "200px" }}
                variant="contained"
              >
                Submit
              </Button>
            </Grid>
            <Grid sx={{ marginTop: "30px" }}>
              <Button
                onClick={() => navigate("/")}
                style={{
                  backgroundColor: "#f6a192",
                }}
                sx={{ width: "200px" }}
                variant="contained"
              >
                Back
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default LoginPage;

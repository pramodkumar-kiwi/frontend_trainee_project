import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import Link from "@mui/material/Link";
import { Link as Rlink, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const phoneRegExp =
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const emailRegExp =
       /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const nameRegExp =
       /^[A-Z][a-z]{1,30}([-'][A-Z][a-z]{1,30})?$/g;

  const validationSchema = yup.object({
      firstName: yup
          .string("Enter your first name")
          .min(3, "must be at least 3 characters long")
          .matches(nameRegExp,"Initials should be capital rest small with no spaces")
          .required("First name is required"),
      lastName: yup
          .string("Enter your last name")
          .min(3, "must be at least 3 characters long")
          .matches(nameRegExp,"Initials should be capital rest small with no spaces")
          .required("Last name is required"),
      username: yup
          .string("Enter your user name")
          .min(3, "must be at least 3 characters long")
          .required("User name is required")
          .test(
              "Unique username",
              "Username already in use",
              async function validateUserName(value) {
                  try {
                      const response = await axios.get(
                          `https://dummyjson.com/users/search?q=${value}`
                      );
                    //   console.log(response);
                      if (response.data.total > 0) return false; // or true as you see fit
                      return true;
                  } catch (error) {
                      console.log(error);
                      return false;
                  }
              }
          ),
      email: yup
          .string("Enter your email")
          .email("Enter a valid email")
          .matches(emailRegExp, "Email is not valid")
          .required("Email is required")
          .test(
              "Unique Email",
              "Email already in use",
              async function validateEmail(value) {
                  try {
                      const response = await axios.get(
                          `https://dummyjson.com/users/search?q=${value}`
                      );
                      //console.log(response);
                      if (response.data.total > 0) return false; // or true as you see fit
                      return true;
                  } catch (error) {
                      console.log(error);
                      return false;
                  }
              }
          ),
      password: yup
          .string("Enter your password")
          .min(8, "Password should be of minimum 8 characters length")
          .required("Password is required"),
      phone: yup
          .string()
          .required("Phone number is required")
          .matches(phoneRegExp, "Phone number is not valid")
          .min(10, "too short")
          .max(10, "too long"),
  });

  const blankInitialValues = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      phone: "",
  };

  const formik = useFormik({
      initialValues: blankInitialValues,
      validationSchema: validationSchema,
      onSubmit: async (values) => {
          console.log(values);
          try {
              const config = {
                  headers: { "Content-Type": "application/json" },
              };
              const formData = JSON.stringify(values);
              const { data } = await axios.post(
                  `https://dummyjson.com/users/add`,
                  formData,
                  config
              );
              console.log(data);
              localStorage.clear("signup_vals");
              navigate("/");
          } catch (error) {
              console.log(error);
              alert(error.response.data.message);
              formik.setSubmitting(false);
          }
      },
  });

  React.useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
          navigate("/");
      }
      const saved = JSON.parse(localStorage.getItem("signup_vals"));
      if (saved) {
          formik.setValues(saved);
      }
  }, []);

  React.useEffect(() => {
      if (formik.values !== blankInitialValues)
          localStorage.setItem("signup_vals", JSON.stringify(formik.values));
  }, [formik.values]);

  return (
      <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
              sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
              }}
          >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                  Sign up
              </Typography>
              <Box
                  component="form"
                  noValidate
                  onSubmit={formik.handleSubmit}
                  sx={{ mt: 3 }}
              >
                  <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                          <TextField
                              autoComplete="given-name"
                              name="firstName"
                              required
                              fullWidth
                              id="firstName"
                              label="First Name"
                              autoFocus
                              value={formik.values.firstName}
                              onChange={formik.handleChange}
                              error={
                                  formik.touched.firstName &&
                                  formik.errors.firstName
                              }
                              helperText={
                                  formik.touched.firstName &&
                                  formik.errors.firstName
                              }
                          />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                          <TextField
                              required
                              fullWidth
                              id="lastName"
                              label="Last Name"
                              name="lastName"
                              autoComplete="family-name"
                              value={formik.values.lastName}
                              onChange={formik.handleChange}
                              error={
                                  formik.touched.lastName &&
                                  formik.errors.lastName
                              }
                              helperText={
                                  formik.touched.lastName &&
                                  formik.errors.lastName
                              }
                          />
                      </Grid>
                      <Grid item xs={12}>
                          <TextField
                              required
                              fullWidth
                              id="username"
                              label="User Name"
                              name="username"
                              autoComplete="username"
                              value={formik.values.username}
                              onChange={formik.handleChange}
                              error={formik.errors.username && formik.touched.username}
                              helperText={formik.errors.username}
                          />
                      </Grid>
                      <Grid item xs={12}>
                          <TextField
                              required
                              fullWidth
                              id="email"
                              label="Email Address"
                              type="email"
                              name="email"
                              autoComplete="email"
                              value={formik.values.email}
                              onChange={formik.handleChange}
                              error={formik.errors.email && formik.touched.email}
                              helperText={formik.errors.email}
                          />
                      </Grid>
                      <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              id="password"
              autoComplete="new-password"
              type={showPassword ? "text" : "password"}
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && formik.errors.password}
              helperText={formik.touched.password && formik.errors.password}
            />
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                style={{
                  marginLeft: 340,
                  position: "absolute",
                  marginBottom: 52,
                }}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          </Grid>
                      <Grid item xs={12}>
                          <TextField
                              required
                              fullWidth
                              name="phone"
                              label="Phone"
                              type="number"
                              id="phone"
                              autoComplete="phone"
                              value={formik.values.phone}
                              onChange={formik.handleChange}
                              error={
                                  formik.touched.phone && formik.errors.phone
                              }
                              helperText={
                                  formik.touched.phone && formik.errors.phone
                              }
                          />
                      </Grid>
                  </Grid>
                  
                  <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      disabled={formik.isSubmitting}
                    
                  >
                      Sign Up
                  </Button>
                  <Grid container justifyContent="flex-end">
                      <Grid item>
                          <Rlink to="/signin">
                              <Link variant="body2">
                                  Already have an account? Sign in
                              </Link>
                          </Rlink>
                      </Grid>
                  </Grid>
              </Box>
          </Box>
      </Container>
  );
};

export default SignUp;

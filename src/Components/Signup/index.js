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


const SignUp = () => {
  /*const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };*/
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = yup.object({
    firstName: yup
      .string("Enter your first name")
      .min(3, "must be at least 3 characters long")
      .required("First name is required"),
    lastName: yup
      .string("Enter your last name")
      .min(3, "must be at least 3 characters long")
      .required("Last name is required"),
    username: yup
      .string("Enter your user name")
      .min(3, "must be at least 3 characters long")
      .required("User name is required")
      .test(
        "Unique username",
        "Username already in use", // <- key, message
        function (value) {
          return new Promise((resolve, reject) => {
            axios
              .get(`http://localhost:8003/api/u/user/${value}/available`)
              .then((res) => {
                resolve(true);
              })
              .catch((error) => {
                if (
                  error.response.data.content ===
                  "The username has already been taken."
                ) {
                  resolve(false);
                }
              });
          });
        }
      ),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required")
      .test(
        "Unique Email",
        "Email already in use", // <- key, message
        function (value) {
          return new Promise((resolve, reject) => {
            axios
              .get(`http://localhost:8003/api/u/user/${value}/available`)
              .then((res) => {
                resolve(true);
              })
              .catch((error) => {
                if (
                  error.response.data.content ===
                  "The email has already been taken."
                ) {
                  resolve(false);
                }
              });
          });
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

  const formik = useFormik({
    initialValues: {},
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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
        <Typography component="h1" variant="h4">
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
                error={formik.touched.firstName && formik.errors.firstName}
                helperText={formik.touched.firstName && formik.errors.firstName}
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
                error={formik.touched.lastName && formik.errors.lastName}
                helperText={formik.touched.lastName && formik.errors.lastName}
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
                onBlur={formik.handleChange}
                error={formik.touched.username && formik.errors.username}
                helperText={formik.touched.username && formik.errors.username}
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
                onBlur={formik.handleChange}
                error={formik.touched.email && formik.errors.email}
                helperText={formik.touched.email && formik.errors.email}
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
                error={formik.touched.phone && formik.errors.phone}
                helperText={formik.touched.phone && formik.errors.phone}
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
            {/* <Grid item>
                            <Rlink to="signin">
                                <Link variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Rlink>
                        </Grid> */}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;

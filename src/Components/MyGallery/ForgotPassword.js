import React, { useState } from "react";
import "./index.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { forgotPassword_postData } from "../Services";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmailError(false); 
    
    // Send API request to reset password
    forgotPassword_postData({
      email: email,
    })
      .then((response) => {
        if (response?.status === 200) toast.success(response?.data?.message);
        setEmailError(false);
        setEmail('');
      })
      .catch((error) => {
        if (error?.response?.status === 400)
        toast.error(error?.response?.data?.email[0]);
        setEmail("");

      });
    // setEmail("");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(false);
  };

  return (
    <div className="forgotPass">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Forgot Your Password?</h2>
        </div>
        <div className="card-body">
          <Typography sx={{ mt: 1, mb: 2 }}>
            No worries, we got you covered. Enter your email below and we'll
            send you a link to reset your password.
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                type="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={handleEmailChange}
                error={emailError}
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 1 }}
            >
              RESET PASSWORD
            </Button>
            <Button fullWidth variant="contained" sx={{ mt: 1, mb: 2 }}>
              <Link to="/signin" className="link_Login">
                Back to Login
              </Link>
            </Button>

           
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
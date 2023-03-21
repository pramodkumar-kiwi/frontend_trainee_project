import React, { useState } from "react";
import "./index.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { emailRegExp, EMAIL_REGEX_VALDATION_MESSAGE } from "../Constants";
import { forgotPassword_postData } from "../Services";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [isResettingPassword, setIsResettingPassword] = useState(false);
  const [resetPasswordSuccess, setResetPasswordSuccess] = useState(false);
  const [resetPasswordError, setResetPasswordError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate email format
    if (!emailRegExp.test(email)) {
      setEmailError(true);
      return;
    }

    // Send API request to reset password
    setIsResettingPassword(true);
    forgotPassword_postData({
      email: email,
    })
      .then((response) => {
        console.log(response);
        setResetPasswordSuccess(true);
        setResetPasswordError(null);
        if (response?.status === 200) 
        toast.success(response?.data?.message);
      })
      .catch((error) => {
        console.log(error);
        if (error?.response?.status === 400)
          toast.error(error?.response?.data?.email[0]);
        setIsResettingPassword(false);
        setResetPasswordSuccess(false);
        setResetPasswordError("");
      });
    setEmail("");
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
                helperText={emailError && EMAIL_REGEX_VALDATION_MESSAGE}
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 1 }}
            //   disabled={isResettingPassword}
            >
              {isResettingPassword ? "Resetting Password..." : "Reset Password"}
            </Button>
            <Button fullWidth variant="contained" sx={{ mt: 1, mb: 2 }}>
              <Link to="/signin" className="link_Login">
                Back to Login
              </Link>
            </Button>

            {resetPasswordSuccess && (
              <Typography color="success">
                Password reset link has been sent to your email address.
              </Typography>
            )}
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

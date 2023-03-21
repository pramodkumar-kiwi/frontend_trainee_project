import React, { useState } from 'react';
import './index.css';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import {emailRegExp,EMAIL_REGEX_VALDATION_MESSAGE} from '../Constants';

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
    try {
      const response = await fetch("API", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      setResetPasswordSuccess(true);
      setResetPasswordError(null);
    } catch (error) {
      setResetPasswordSuccess(false);
      setResetPasswordError(error.message);
    } finally {
      setIsResettingPassword(false);
    }
    // Clear email input
    setEmail("");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(false);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Forgot Your Password?</h2>
      </div>
      <div className="card-body">
        <Typography>
          No worries, we got you covered.
          Enter your email below and we'll send you a link to reset your password.
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
            type='submit'
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isResettingPassword}
          >
            {isResettingPassword ? "Resetting Password..." : "Reset Password"}
          </Button>
          {resetPasswordSuccess && (
            <Typography color="success">
              Password reset link has been sent to your email address.
            </Typography>
          )}
          {resetPasswordError && (
            <Typography color="error">
              Error resetting password: {resetPasswordError}
            </Typography>
          )}
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

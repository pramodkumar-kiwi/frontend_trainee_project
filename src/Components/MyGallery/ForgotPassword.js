import React from 'react';
import './index.css';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";


function ForgotPassword() {
  return (
    <div className='forgotPass'>
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Forgot Your Password?</h2>
        </div>
        <div className="card-body">
          <Typography sx={{ mt: 1, mb: 2 }}>
            No worries, we got you covered.
            Enter your email below and we'll send you a link to reset your password.
          </Typography>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              type="email"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 1 }}
          >
            Reset Password
          </Button>

          
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2, textDecoration: "none" }}

            ><Link to="/" className='link_Login'>
              Back to Login</Link>
            </Button>
          


        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;

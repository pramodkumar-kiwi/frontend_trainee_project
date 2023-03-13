import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const error = "INVALID CREDENTIALS!!! PLEASE TRY AGAIN.";

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/login", { username, password })
      .then((response) => {
        setPassword("");
        setUsername("");
        console.log(response.data);
        //navigation in future
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="body"></div>
      <div className="bg-img">
        <div className="form-container">
          <form className="form-abc">
            <p style={{ color: "red", margin: "0" }}>{error}</p>

            <h1>Login Page</h1>

            <label htmlFor="email">
              <b>Username</b>
            </label>
            <input
              type="text"
              className="abc-abc"
              placeholder="Enter Username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />

            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              className="abc-abc"
              type="password"
              placeholder="Enter Password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />

            <button type="submit" className="btn" onClick={handleSubmit}>
              Login
            </button>

            <hr />
            <p>Don't have an account?</p>
            <Link to="/signup">
              <button type="submit" className="btn">
                Sign Up
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

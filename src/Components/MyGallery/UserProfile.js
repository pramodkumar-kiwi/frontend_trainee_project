import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import Navbar from "./Navbar";
import { accessToken, refreshToken } from "../Constants";
import './Modal.css';

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  const handleButtonClick = () => {
    // Set the userId to the actual userId that you want to fetch from the API
    setUserId("123");
    setIsOpen(true);
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (
      localStorage.getItem(refreshToken) === null ||
      localStorage.getItem(accessToken) === null
    ) {
      navigate("/");
    }
  });
  return (
    <>
      <Navbar />
      <div className="userProfile-container">
        <button className="userProfile-myBtn">Change Password</button>
        <button className="userProfile-myBtn" onClick={handleButtonClick}>
          Open User Profile
        </button>
        
        <button className="userProfile-myBtn" >
          Log Out
        </button>
      </div>
    </>
  );
};

export default UserProfile;

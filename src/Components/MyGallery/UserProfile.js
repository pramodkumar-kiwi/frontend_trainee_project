import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './index.css'
import Navbar from './Navbar'
import { accessToken, refreshToken } from '../Constants'
import './Modal.css';

const UserProfile = () => {
  
  const navigate = useNavigate();

  // This is to check whether user is authenticated
  useEffect(() => {
    if (
      localStorage.getItem(refreshToken) === null ||
      localStorage.getItem(accessToken) === null
    ) {
      navigate("/");
    }
  });



  // This is to log-out the user and redirect to the log-in page 
  const handleLogOut = () => {
    localStorage.clear();
    navigate('/');
  };


  return (
    <>
      <Navbar />
      <div className="userProfile-container">
        <button className="userProfile-myBtn">Change Password</button>
        <button className="userProfile-myBtn">
          Open User Profile
        </button>
        <button className="userProfile-myBtn" onClick={handleLogOut}>
          Log Out
        </button>
      </div>
    </>
  );
};



export default UserProfile


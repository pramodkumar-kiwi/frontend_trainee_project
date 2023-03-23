import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './index.css'
import Navbar from './Navbar'
import { accessToken, refreshToken } from '../Constants'
import './Modal.css';
import {signOut_postData} from '../Services'

const UserProfile = () => {
  const [openuserModal,setOpenUserModal]=useState(false)
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
 const handleOpenProfile = () => {
  
  
      setOpenUserModal(!openuserModal)
 }

  // This is to log-out the user and redirect to the log-in page 
  const handleLogOut = () => {
    signOut_postData({
      refresh: localStorage.getItem("refreshToken")
    })
    .then((response) => {
      console.log(response);
      localStorage.clear();
      navigate('/');
    }).catch((error)=> {
      console.log(error);
    })

    
  };


  return (
    <>
      <Navbar />
      <div className="userProfile-container">
        <button className="userProfile-myBtn">Change Password</button>
        <button className="userProfile-myBtn" onClick={handleOpenProfile}>
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


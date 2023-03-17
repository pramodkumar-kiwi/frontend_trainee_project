import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './index.css'
import Navbar from './Navbar'
import { signOut_postData, userProfile_getData } from '../Services'
import { accessToken, refreshToken } from '../Constants'

const UserProfile = () => {

  const navigate = useNavigate();
  const details = localStorage.getItem(refreshToken);
  // This is to check whether user is authenticated
  useEffect(() => {
    if (localStorage.getItem(refreshToken) === null || localStorage.getItem(accessToken) === null) {
      navigate('/');
    }
    userProfile_getData().then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  });
  
  // This is to log-out the user and redirect to the log-in page 
  const handleLogOut = () => {
    signOut_postData(details)
    .then((response) => {
      console.log(response);
      console.log("THis");
      localStorage.clear();
      navigate('/');
    }).catch((error) => {
      console.log("err");
      console.log(error);
    });
  };

  return (<>
    <Navbar />

    <div className='userProfile-container'>
      <button className='userProfile-myBtn'>Change Password</button>
      <button className='userProfile-myBtn'>My Profile</button>
      <button className='userProfile-myBtn' onClick={handleLogOut}>Log Out</button>
    </div>

  </>
  )
}

export default UserProfile

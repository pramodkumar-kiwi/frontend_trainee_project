import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './index.css'
import Navbar from './Navbar'
import { signOut_postData, userProfile_getData } from '../Services'
import { accessToken, refreshToken } from '../Constants'
import './Modal.css';

const UserProfile = () => {

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState(null);
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
    localStorage.clear();
    navigate('/');
    // signOut_postData(details)
    //   .then((response) => {
    //     console.log(response);
    //     console.log("THis");
    //     localStorage.clear();
    //     navigate('/');
    //   }).catch((error) => {
    //     console.log("err");
    //     console.log(error);
    //   });
  };


  const handleButtonClick = () => {
    // Set the userId to the actual userId that you want to fetch from the API
    setUserId("123");
    setIsOpen(true);
  };


  return (<>
    <Navbar />

    <div className='userProfile-container'>
      <button className='userProfile-myBtn' onClick={handleButtonClick}>Change Password</button>
      <button className='userProfile-myBtn'>Open User Profile</button>
      <button className='userProfile-myBtn' onClick={handleLogOut}>Log Out</button>
    </div>

  </>
  )
}

export default UserProfile




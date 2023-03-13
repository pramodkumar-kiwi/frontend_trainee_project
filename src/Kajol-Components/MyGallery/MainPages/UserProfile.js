import React, {useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../index.css'
import Navbar from '../ItsComponents/Navbar'
import {signOut_postData} from '../../Services'
import {accessToken,refreshToken} from '../../Constants'

const UserProfile = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem(refreshToken) === null || localStorage.getItem(accessToken) === null) {
      navigate('/');
    }
  });

  const handleLogOut = () => {
        signOut_postData({
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem(refreshToken)}`
          }
        }).then((response) => {
          console.log(response);
          localStorage.clear();
          navigate('/');
        }).catch((error) => {
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

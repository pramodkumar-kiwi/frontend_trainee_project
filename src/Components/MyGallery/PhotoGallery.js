import React, {useEffect} from 'react'
import './index.css'
import Navbar from './Navbar'
import Add_UpdateBtn from './Add_UpdateBtn'
import Albums from './Albums'
import { useNavigate } from 'react-router-dom';
import {accessToken, refreshToken} from '../Constants'

const PhotoGallery = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem(refreshToken) === null || localStorage.getItem(accessToken) === null) {
      navigate('/');
    }
  });
    return <>
      <Navbar />
      <div className='photoGallery-container'>
        <Add_UpdateBtn />
        <br/>
        <br/>
      
        <Albums />
      </div>
    </>
  }

export default PhotoGallery

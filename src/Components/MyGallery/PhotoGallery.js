import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './index.css'
import Navbar from './Navbar'
import Modal from './Modal'
import Albums from './Albums'
import {accessToken, refreshToken} from '../Constants'


const PhotoGallery = () => {

  const navigate = useNavigate();

  // This is to check whether user is authenticated
  useEffect(() => {
    if (localStorage.getItem(refreshToken) === null || localStorage.getItem(accessToken) === null) {
      navigate('/');
    }
  });

  
    return <>
      <Navbar />
      <div className='photoGallery-container'>
        <Modal />
        <Albums/>
      </div>
    </>
  }

export default PhotoGallery

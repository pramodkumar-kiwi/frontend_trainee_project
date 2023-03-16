import Modal from './Modal'
import React, {useEffect} from 'react'
import './index.css'
import Navbar from './Navbar'
import Albums from './Albums'
import { useNavigate } from 'react-router-dom';
import {accessToken, refreshToken} from '../Constants';
import ImageGallery from './Imagegallery'

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
        <Modal/>
      {/* <ImageGallery/> */}
        <Albums />
      </div>
    </>
  }

export default PhotoGallery

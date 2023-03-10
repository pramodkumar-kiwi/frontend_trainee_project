import React, {useEffect} from 'react'
import '../index.css'
import Navbar from '../ItsComponents/Navbar'
import Add_UpdateBtn from '../ItsComponents/Add_UpdateBtn'
import Albums from '../ItsComponents/Albums'
import { useNavigate } from 'react-router-dom';
import {accessToken, refreshToken} from '../../Constants'

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
        <Albums />
      </div>
    </>
  }

export default PhotoGallery

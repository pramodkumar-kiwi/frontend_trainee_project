import React from 'react'
import './index.css'
import Navbar from './Navbar'
import Add_UpdateBtn from './Add_UpdateBtn'

const PhotoGallery = () => {
  return <>
  <Navbar/>
  <div className='photoGallery-container active'>
  <h1> This is my Photo Gallery</h1>
  <Add_UpdateBtn/>
  </div>
  </>
}

export default PhotoGallery

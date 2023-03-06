import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = (onPhotoBtnClick, onVideoBtnClick, onProfileBtnClick) => {

  return (
    <div className='navbar'>
      <Link to="/photoGallery" className='nav-btn-link'><button className='nav-buttons'>PHOTO GALLERY</button></Link>
      <Link to="/videoGallery" className='nav-btn-link'><button className='nav-buttons' >VIDEO GALLERY</button></Link>
      <Link to="/userProfile" className='nav-btn-link'><button className='nav-buttons' >USER PROFILE</button></Link>
    </div>
  )
}

export default Navbar

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const [photoGallery, setPhotoGallery] = useState(true);
  const [videoGallery, setVideoGallery] = useState(false);
  const [userProfile, setUserProfile] = useState(false);

  const onPhotoBtnClick = () => {
    setPhotoGallery(true)

    setVideoGallery(false)
    setUserProfile(false)
  }

  const onVideoBtnClick = () => {
    setVideoGallery(true)

    setPhotoGallery(false)
    setUserProfile(false)
  }

  const onUserProfileBtnClick = () => {
    setUserProfile(true)

    setPhotoGallery(false)
    setVideoGallery(false)
  }

  // const photoGalleryClasses = photoGallery ? "nav-buttons active" : "nav-buttons"
  // const videoGalleryClasses = videoGallery ? "nav-buttons active" : "nav-buttons"
  // const userProfileClasses = userProfile ? "nav-buttons  active" : "nav-buttons"

  return (
    <div className='navbar'>
      <NavLink to="/photoGallery" className="nav-btn-link" style={isActive => ({
    color: isActive ? "green" : "blue"
  })}>
        <button className='nav-buttons' onClick={onPhotoBtnClick}>PHOTO GALLERY</button>
      </NavLink>

      <NavLink to="/videoGallery" className="nav-btn-link" activeStyle={{ fontWeight: "bold", color: "red" }}>
        <button className='nav-buttons' onClick={onVideoBtnClick}>VIDEO GALLERY</button>
      </NavLink>

      <NavLink to="/userProfile" className="nav-btn-link" activeStyle={{ fontWeight: "bold", color: "green" }}>
        <button className='nav-buttons' onClick={onUserProfileBtnClick} >USER PROFILE</button>
      </NavLink>

    </div>
  )
}

export default Navbar

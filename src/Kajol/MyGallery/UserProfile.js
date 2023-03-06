import React from 'react'
import './index.css'

import Navbar from './Navbar'

const UserProfile = () => {
  return (<>
    <Navbar/>
    <div className='userProfile-container'>
    <h1> This is my User profile</h1>
    </div>
    </>
  )
}

export default UserProfile


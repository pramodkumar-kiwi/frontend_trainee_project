import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './Components/Signup/index'
import LoginPage from "./Kajol-Components/Login/index";
import PhotoGallery from './Kajol-Components/MyGallery/MainPages/PhotoGallery';
import VideoGallery from './Kajol-Components/MyGallery/MainPages/VideoGallery';
import UserProfile from './Kajol-Components/MyGallery/MainPages/UserProfile';

import React from 'react'

function App() {

  return (
    <>
    {/* <SignUp/> */}
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}></Route>
          <Route path='/signUp' element={<SignUp/>}></Route>
          <Route path="/photoGallery" element={<PhotoGallery/>}></Route>
          <Route path="/videoGallery"  element={<VideoGallery/>}></Route>
          <Route path="/userProfile" element={<UserProfile/>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <PhotoGallery/> */}
      
    </>
  );
}

export default App;


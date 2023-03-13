import React from "react";
import LoginPage from './Components/Login/index'
import SignUp from "./Components/Signup";
import { Routes, Route } from 'react-router-dom';
// import PhotoGallery from "./Components/MyGallery/PhotoGallery";
function App() {
  return (
    <>
    <Routes>
    <Route path = "/" element = {<LoginPage/>}/>
    <Route path = "/signin" element = {<LoginPage/>}/>
    <Route path = "/signup" element = {<SignUp/>}/>
    </Routes>
    {/* <PhotoGallery/> */}
    </>
 
  );
}

export default App;

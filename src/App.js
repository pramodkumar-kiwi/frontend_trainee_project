import React from "react";
import LoginPage from './Components/Login/index'
import SignUp from "./Components/Signup";
// import MyGallery from './Components/MyGallery/index'
//import { HashRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
     <Routes>
    {/* <Router> */}
    <Route path = "/" element = {<LoginPage/>}/>
    <Route path = "/signin" element = {<LoginPage/>}/>
    <Route path = "/signup" element = {<SignUp/>}/>
    {/* </Router> */}
    {/* <SignUp/> */}
    </Routes>
    </>
  //   <Router>
  //   <SignUp/>
  //   {/* <LoginPage/> */}
  //   {/* <MyGallery/> */}
  //  </Router>
  );
}

export default App;

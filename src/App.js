import React from "react";
import LoginPage from './Components/Login/index'
import SignUp from "./Components/Signup";
import {BrowserRouter as Router,Routes,Route,Link,NavLink} from 'react-router-dom';
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

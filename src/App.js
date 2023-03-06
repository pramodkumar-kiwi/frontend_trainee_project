import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from './Components/Signup/index'
import LoginPage from "./Kajol/Login/index";
import PhotoGallery from './Kajol/MyGallery/PhotoGallery';
import VideoGallery from './Kajol/MyGallery/VideoGallery';
import UserProfile from './Kajol/MyGallery/UserProfile';

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


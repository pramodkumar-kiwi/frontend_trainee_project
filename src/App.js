import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Login/index";
import SignUp from "./Components/Signup/index";
import PhotoGallery from './Components/MyGallery/PhotoGallery';
import VideoGallery from './Components/MyGallery/VideoGallery';
import UserProfile from './Components/MyGallery/UserProfile';
import Forgotpassword from './Components/MyGallery/ForgotPassword';

function App() {
  
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}></Route>
          <Route path='/signUp' element={<SignUp/>}></Route>
          <Route path = "/signin" element = {<LoginPage/>}/>
          <Route path="/photoGallery" element={<PhotoGallery/>}></Route>
          <Route path="/videoGallery"  element={<VideoGallery/>}></Route>
          <Route path="/userProfile" element={<UserProfile/>}></Route>
          <Route path ='forgotpassword' element={<Forgotpassword/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


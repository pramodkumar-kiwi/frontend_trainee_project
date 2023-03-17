import React, { useEffect } from "react";
import "./index.css";
import Navbar from "./Navbar";
import Albums from "./Albums";
import { useNavigate } from "react-router-dom";
import { accessToken, refreshToken } from "../Constants";
import Modal from "./Modal";

const VideoGallery = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (
      localStorage.getItem(refreshToken) === null ||
      localStorage.getItem(accessToken) === null
    ) {
      navigate("/");
    }
  });

  return (
    <>
      <Navbar />
      <div className="videoGallery-container">
        <br />
        <Modal />
        <Albums />
      </div>
    </>
  );
};
export default VideoGallery;

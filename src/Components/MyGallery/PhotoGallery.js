import Modal from "./Modal";
import React, { useEffect, useState } from "react";
import "./index.css";
import Navbar from "./Navbar";
import Albums from "./Albums";
import { useNavigate } from "react-router-dom";
import { accessToken, refreshToken } from "../Constants";
import ImageGallery from "./Imagegallery";
import axios from "axios";

const PhotoGallery = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleOpenModal = () => {
    setShowModal(true);
  };

  // code for uploading the imagefile onto the server.
  const handleImageUpload = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", event.target.files[0]);
    formData.append(
      "image_gallery_id"
      // gallery[selectedGalleryindex.current].id
    );
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "ngrok-skip-browser-warning": "237",
        Authorization: `Bearer ${localStorage.getItem(accessToken)}`,
      },
    };
    const addImage = await axios.post("https://0ae1-182-74-85-106.in.ngrok.io/gallery/images/", config, formData);
    console.log(addImage);
  };

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
      <div className="photoGallery-container">
        {/* <ImageGallery/> */}
        <Albums />
        <i
          className="fa
      -solid fa-plus add-icon-icon"
          onClick={handleOpenModal}
        ></i>
        {showModal && (
          <Modal
            handleClose={handleCloseModal}
            handleUpload={handleImageUpload}
          />
        )}
      </div>
    </>
  );
};

export default PhotoGallery;

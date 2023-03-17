import Modal from "./Modal";
import React, { useEffect, useState } from "react";
import "./index.css";
import Navbar from "./Navbar";
import Albums from "./Albums";
import { useNavigate } from "react-router-dom";
import { accessToken, refreshToken } from "../Constants";
import axios from "axios";

const PhotoGallery = () => {
    const [gallery, setGallery] = React.useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
    };
    const handleOpenModal = () => {
        setShowModal(true);
    };

    // code for uploading the imagefile onto the server.
    const handleImageUpload = async (data) => {
        const formData = new FormData();
        data.file.map((val) => formData.append("image", val));
        formData.append("image_gallery_id", data.galleryId);
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                "ngrok-skip-browser-warning": "237",
                Authorization: `Bearer ${localStorage.getItem(accessToken)}`,
            },
        };
        const addImage = await axios.post(
            "https://0ae1-182-74-85-106.in.ngrok.io/gallery/images/",
            formData,
            config
        );
        console.log(addImage);
        getImageGallery();
    };

    const getImageGallery = async () => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem(accessToken)}`,
                "ngrok-skip-browser-warning": "237",
            },
        };
        const response = await axios.get(
            "https://0ae1-182-74-85-106.in.ngrok.io/gallery/image-gallery/",
            config
        );
        console.log(response);
        if (response?.data.length > 0) {
            setGallery(response.data);
        }
    };

    const navigate = useNavigate();

    useEffect(() => {
        if (
            localStorage.getItem(refreshToken) === null ||
            localStorage.getItem(accessToken) === null
        ) {
            navigate("/");
        } else {
            getImageGallery();
        }
    }, []);
    return (
        <>
            <Navbar />
            <div className="photoGallery-container">
                
                {gallery && <Albums gallery={gallery} />}
                <i
                    className="fa
      -solid fa-plus add-icon-icon"
                    onClick={handleOpenModal}
                ></i>
                {showModal && (
                    <Modal
                        handleClose={handleCloseModal}
                        getImageGallery={getImageGallery}
                        handleImageUpload={handleImageUpload}
                    />
                )}
            </div>
        </>
    );
};

export default PhotoGallery;

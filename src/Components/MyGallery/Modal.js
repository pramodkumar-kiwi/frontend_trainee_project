import React, { useState } from "react";
import "./Modal.css";
import axios from "axios";
import { accessToken } from "../Constants";

const Modal = ({ handleClose, handleUpload }) => {
  //states for file, and name
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  // code for creating a photo gallery
  const createGallery = async (event) => {
    event.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "237",
          Authorization: `Bearer ${localStorage.getItem(accessToken)}`,
        },
      };
      const gallery_name = {
        gallery_name: event.currentTarget.gallery_name.value,
      };
      const { data } = await axios.post(
        "https://a53f-182-74-85-106.in.ngrok.io/image/image-gallery/",
        gallery_name,
        config
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  // function for droping the modal
  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const { files } = event.dataTransfer;

    if (files && files.length > 0) {
      const file = files[0];
      setFile(file);
    }
  };
  // function for uploading the picture.
  const handleUploadClick = () => {
    if (file) {
      handleUpload(file);
      handleClose();
    }
  };

  return (
    <div className="modal">
      <div className="modal-content" onDrop={handleDrop}>
        <form>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
          />

          <button
            className="button_Create_gallery"
            type="submit"
            onClick={createGallery}
          >
            Create Gallery
          </button>
        </form>

        <div className="modal-header">
          <h3>Upload Image</h3>
        </div>

        <div className="modal-body">
          {file && (
            <div className="preview">
              <img src={URL.createObjectURL(file)} alt="Preview" />
            </div>
          )}
          {!file && (
            <div className="drag-and-drop">
              <p>Drag and drop an image file here or click to browse.</p>
              <input
                type="file"
                onChange={(event) => setFile(event.target.files[0])}
              />
            </div>
          )}
        </div>
        <div className="modal-footer">
          <button onClick={handleClose}>Cancel</button>
          <button onClick={handleUploadClick}>Upload</button>
        </div>
      </div>
    </div>
  );
};


export default Modal;

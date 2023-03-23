import React from "react";
import "./Modal.css";
import axios from "axios";
import { accessToken, IMAGE_FILE_LENGTH, IMAGE_lENGTH } from "../Constants";
import {toast} from "react-toastify";


const Modal = ({setFile, files, setGalleryName, galleryName, handleClose, getAllAlbumsData, handleImageUpload, galleryCreated, setGalleryCreated}) => {
  //states for file, and name
  
  const handleNameChange = (event) => {
    if (!galleryCreated) setGalleryName(event.target.value);
  };

  const handleFiles = (e) => {
    const imageFiles = e.target.files;
    const images = [];
    if (imageFiles.length > IMAGE_FILE_LENGTH) {
      toast.error(IMAGE_lENGTH);
      return;
    }
    for (let i = 0; i < imageFiles.length; i++) {
      images.push(imageFiles[i]);
    }
    setFile(images);
  };
  // code for creating a photo gallery
  const createImageGallery = async (event) => {
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
        gallery_name: galleryName,
      };
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/gallery/image-gallery/`,
        gallery_name,
        config
      );
      if (data?.message) {
        toast.success(data.message);
      }
      setGalleryCreated(data);
      getAllAlbumsData();
    } catch (error) {
      if (error?.response?.status === 400)
        toast.error(error?.response?.data?.gallery_name[0]);
    }
  };

  /*
   This function is called when the user drops an image file onto the modal.
   It prevents the default behavior of opening the file and sets the file state variable to the dropped file.
   */

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (galleryCreated) {
      const { files } = event.dataTransfer;
      if (files && files.length > 0) {
        handleFiles(files)
      }
    }
  };

  // function for "Upload" button.If a file has been selected, it calls the handleUpload function passed in as a prop with the selected file and then calls the handleClose function to close the modal.
  const handleUploadClick = async () => {
    if (files) {
      const data = { galleryId: galleryCreated.data.id, file: files };
      await handleImageUpload(data);
      handleClose();
    }
  };

  const removeImage = (image) => {
    const updatedFiles = files.filter((ft) => ft !== image);
    setFile(updatedFiles);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="modal-close-btn" onClick={() => handleClose()}>
          X
        </button>
        {galleryCreated ? (
          <>
            <div className="modal-header">
              <h2>GALLERY NAME:</h2>
              <h3>{galleryName}</h3>
            </div>

            <div className="modal-body">
              <div className="preview-images">
                {files.length > 0 &&
                  files.map((val, ind) => (
                    <div key={ind} className="preview">
                      <button className ="Cross-Button"onClick={() => removeImage(val)}> X </button>
                      <img
                        src={URL.createObjectURL(val)}
                        alt="Preview"
                        className="grid-img"
                      />
                    </div>
                  ))}
              </div>
              <div className="drag-and-drop" onDrop={handleDrop}>
                <p>Drag and drop an image file here or click to browse.</p>
                <input
                  accept="image/*"
                  type="file"
                  onChange={handleFiles}
                  multiple
                />
              </div>
            </div>

            <div className="modal-footer">
              <button onClick={() => handleClose()}>Cancel</button>
              {galleryCreated && (
                <button onClick={() => handleUploadClick()}>Upload</button>
              )}
            </div>
          </>
        ) : (
          <form>
            <label htmlFor="galleryName">Name: </label>
            <input
              type="text"
              id="galleryName"
              name="galleryName"
              value={galleryName}
              onChange={handleNameChange}
            />

            <button
              className="button_Create_gallery"
              onClick={(e) => createImageGallery(e)}
              disabled={galleryCreated}
            >
              Create Gallery
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
export default Modal;

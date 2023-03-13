import React, { useState } from "react";
import './Modal.css'

const apiUrl = 'https://example.com/upload';

const Modal = ({ handleClose, handleUpload }) => {
  const [file, setFile] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const { files } = event.dataTransfer;

    if (files && files.length > 0) {
      const file = files[0];
      setFile(file);
    }
  };

  const handleUploadClick = () => {
    if (file) {
      handleUpload(file);
      handleClose();
    }
  };

  return (
    <div className="modal">
      <div className="modal-content" onDrop={handleDrop}>
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
              <input type="file" onChange={(event) => setFile(event.target.files[0])} />
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

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

// code for uploading the file onto the server.
  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    console.log(file)

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        // file uploaded successfully
        console.log('File uploaded successfully');
      } else {
        // error uploading file
        console.log('Error uploading file');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };


  return (
    <div>
      <button  className="openmodelbutton" onClick={handleOpenModal}>Open Modal</button>
      {showModal && <Modal handleClose={handleCloseModal} handleUpload={handleImageUpload} />}
    </div>
  );
};

export default App;

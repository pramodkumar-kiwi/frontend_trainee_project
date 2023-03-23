import React, { useState } from "react";
import "./Modal.css";
import { BsFillPencilFill } from 'react-icons/bs';
import {Gallery_putData} from '../Services'

const Update = ({ setFile, files, setGalleryName, galleryName, handleClose, getAllAlbumsData, handleImageUpload, galleryCreated, setGalleryCreated }) => {

    const [isTitleEdit, setIsTitleEdit] = useState(false)
    const [isImageEdit, setIsImageEdit] = useState(false)

    const galleryNameEdit = (e)=> {
        setIsTitleEdit(e.target.value)
    }

    const removeImage = (image) => {
        const updatedFiles = files.filter((ft) => ft !== image);
        setFile(updatedFiles);
      };

    const handleEditClick = ( ) => {
        // Gallery_putData()
        
    }

    
    return (
        <div className="modal">

            <div className="modal-content">
                <button className="modal-close-btn" onClick={() => handleClose()}>
                    X
                </button>
                {galleryCreated ? (
                    <>
                        <div className="modal-header">
                            <h2>GALLERY NAME:</h2><h3>{isTitleEdit ? <input value={galleryName} onChange={galleryNameEdit} /> : <h3>{galleryName}</h3>}<BsFillPencilFill className='edit' title='Edit Your Album' onClick={() => setIsTitleEdit(!isTitleEdit)} /></h3>
                        </div>

                        <div className="modal-body">
                            <div className="preview-images">
                                {files.length > 0 &&
                                    files.map((val, ind) => (
                                        <div key={ind} className="preview">

                                            <button onClick={() => removeImage(val)}>
                                                {" "}
                                                Delete{" "}
                                            </button>
                                            <img
                                                src={URL.createObjectURL(val)}
                                                alt="Preview"
                                                className="grid-img"
                                            />
                                        </div>
                                    ))}
                            </div>
                            <div className="drag-and-drop">
                                <p>Drag and drop an image file here or click to browse.</p>
                                <input
                                    accept="image/*"
                                    type="file"
                                    // onChange={handleFiles}
                                    multiple
                                />
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button onClick={() => handleClose()}>Cancel</button>
                            {galleryCreated && (
                                <button onClick={handleEditClick}>Save</button>
                            )}
                        </div>
                    </>
                ) : <p>Something went Wrong</p>
                            }

            </div>
        </div>
    );
};
export default Update;
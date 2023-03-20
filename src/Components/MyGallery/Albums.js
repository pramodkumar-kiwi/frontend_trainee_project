import React from "react";
import "./index.css";
import MyAlbum from "./MyAlbum";

const Albums = ({ files, setFile , myAlbumDetails, galleryCreated, getAllAlbumsData, setShowModal, setGalleryCreated, setGalleryName}) => {
  return (
    <div>
      {
        myAlbumDetails.length > 0 ? <MyAlbum setFile={setFile} files={files}
        setGalleryCreated={setGalleryCreated} galleryCreated={galleryCreated}  setGalleryName={setGalleryName} setShowModal={setShowModal} myAlbumDetails={myAlbumDetails} getAllAlbumsData={getAllAlbumsData}/> : <p className="no-albums_text">No Albums Found</p>
      }
    </div>
  );
};

export default Albums;

import React from "react";
import "./index.css";
import MyAlbum from "./MyAlbum";

const Albums = ({ myAlbumDetails, getAllAlbumsData }) => {
  return (
    <div>
      {
        myAlbumDetails.length > 0 ? <MyAlbum myAlbumDetails={myAlbumDetails} getAllAlbumsData={getAllAlbumsData}/> : <p className="no-albums_text">No Albums Found</p>
      }
    </div>
  );
};

export default Albums;

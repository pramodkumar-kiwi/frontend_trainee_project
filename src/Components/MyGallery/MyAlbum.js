import React, { useState } from "react";
import "./index.css";
const MyAlbum = ({ data }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <div className="conatiner">
      <div
        className="slide-show"
        title="Click to Slideshow"
        onMouseEnter={onHover}
        onMouseLeave={onHover}
      >
        <div className="grid-container">
          {data.image_gallery_set.length > 0 &&
            data.image_gallery_set.map(
              (val, ind) =>
                ind < 4 && (
                  <div key={ind} className="grid-item">
                    <img className="grid-img" src={val.image} />
                  </div>
                )
            )}
          {data.image_gallery_set.length > 4 && (
            <span className="grid-gallery-number">
              +{data.image_gallery_set.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAlbum;

import React, { useState } from "react";
import axios from "axios";
import { accessToken } from "../Constants";
const api = `https://a53f-182-74-85-106.in.ngrok.io/image/image-gallery/`
function ImageGallery() {
  const [name, setName] = useState("");
  const [images, setImages] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const createGallery = async () => {
    try {
      const response = await axios.post(
        api,
        {
            headers: {
                "Content-Type": "application/json",
                "ngrok-skip-browser-warning": "237",
                'Authorization': `Bearer ${localStorage.getItem(accessToken)}`
            }
        }
      );

      return response.data
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Image Gallery</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={handleNameChange} />
        <button type="button" onClick={createGallery}>Create Gallery</button>
      </form>
      <h2>{name}'s Gallery</h2>
      <div className="gallery">
        {images.map((imageUrl) => (
          <img src={imageUrl} alt="Gallery Image" key={imageUrl} />
        ))}
      </div>
      <h2>Image Grid</h2>
      <div className="grid">
        {images.map((apiUrl, index) => (
          <div className="grid-item" key={index} />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;

import React, { useState } from 'react'
import './index.css'
import Carousel_Slider from './Carousel';

const MyAlbum = () => {
  const [isOpen, setIsOpen] = useState(false);

  // This is to open/close the carousel view of the album
  const handlePreview = () => {
    setIsOpen(!isOpen);
    window.scrollTo({ top: 0, behavior: 'smooth', });
  }
  return (
    <>
      <div className='container' >

        <h3 style={{ textAlign: 'center', margin: '0' }}>Album Name</h3>

        <div className='slide-show' title="Click to preview" onClick={handlePreview}>

          <div className="grid-container">
            <div className="grid-item">1</div>
            <div className="grid-item">2</div>
            <div className="grid-item">3</div>
            <div className="grid-item">4</div>
          </div>

        </div>
      </div>

      {isOpen && (
        <>
          <div className='drop-down'>
            <button onClick={handlePreview} title='Close Slider' className='preview-btn'>X</button>
            <Carousel_Slider />
          </div>
        </>
      )}
    </>
  )
}

export default MyAlbum

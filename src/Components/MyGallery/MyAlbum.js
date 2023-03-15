import React, { useEffect, useState } from 'react'
import './index.css'
import Carousel_Slider from './Carousel';
import { albumListing_getData } from '../Services'
import axios from 'axios';

const MyAlbum = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [myAlbumDetails, setMyAlbumDetails] = useState([]);


  const getAllAlbumsData = () => {
    albumListing_getData()
      .then((response) => {
        setMyAlbumDetails(response.data);
      })

  }

  useEffect(() => {
    getAllAlbumsData();
  }, [])


  const handlePreview = () => {
    setIsOpen(!isOpen);
    window.scrollTo({ top: 0, behavior: 'smooth', });
  }

  return (
    <>
      {
        myAlbumDetails.map((detail, i) => {
          return <div className='container' key={i} >
            <h3 style={{ textAlign: 'center', margin: '0' }}>{detail["gallery_name"]}</h3>
            <div className='slide-show' title="Click to preview" onClick={handlePreview}>

              <div className="grid-container">
                {detail.image_gallery_set.map((el, i) => {
                  if(i<4){
                  return <>

                    <div className="grid-item" key={i}><img src={el["image"]} alt='House' height='100px' width='100px' /></div>
                  </>
        }})}
              </div>
            </div>
          </div>
        })
      }


      {
        isOpen && (
          <>
            <div className='drop-down'>
              <button onClick={handlePreview} title='Close Slider' className='preview-btn'>X</button>
              <Carousel_Slider />
            </div>
          </>
        )
      }
    </>
  )
}

export default MyAlbum

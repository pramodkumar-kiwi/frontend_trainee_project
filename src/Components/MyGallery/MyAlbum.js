import React, { useState } from 'react'
import './index.css'
import CarouselSlider from './Carousel';
import { albumListing_deleteData } from '../Services'
import { RiDeleteBinFill } from 'react-icons/ri';
import { BsFillPencilFill, BsInfoLg } from 'react-icons/bs';
import { GALLERY_IMAGE_COUNT } from '../Constants'

const MyAlbum = ({ myAlbumDetails, getAllAlbumsData }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [singleGalleryData, setSingleGalleryData] = useState([]);

  // This is to close the slider
  const handleClosePreview = () => {
    getAllAlbumsData();
    setIsOpen(!isOpen);
  }

  // This is to open the slider of a particular gallery
  const handlePreview = (galleryName) => {
    const filterData = myAlbumDetails.filter((item) => item.gallery_name === galleryName)
    setSingleGalleryData(filterData);
    setIsOpen(!isOpen);
    window.scrollTo({ top: 0, behavior: 'smooth', });
  }

  // This is to delete whole album from gallery API
  const handleDeleteAlbum = (galleryID) => {
    albumListing_deleteData(galleryID)
      .then((response) => {
        return response;
      }).then(() => {
        getAllAlbumsData();
      })
      .catch(error => {
        return error;
      });

  }

  return (
    <>
      {

        myAlbumDetails.map((detail, i) => {
          return <div className='container' key={i} >

            <h3 className='galleryHeading'>{detail["gallery_name"]}
              <RiDeleteBinFill className='del' title='Delete Your Album' onClick={() => handleDeleteAlbum(detail["id"])} />
              <BsFillPencilFill className='edit' title='Edit Your Album' onClick={() => handleDeleteAlbum(detail["id"])} />
              <BsInfoLg className='preview-gallery' title='Preview Your Album' onClick={() => handlePreview(detail["gallery_name"])} />
            </h3>

            <div className='slide-show' title="Click to preview" onClick={() => handlePreview(detail["gallery_name"])}>

              <div className="grid-container">
                {detail.image_gallery_set.map((el, index) => {
                  if (index < GALLERY_IMAGE_COUNT) {
                    return <>
                      <div className="grid-item" key={index}><img src={el["image"]} alt='House' height='100px' width='100px' /></div>
                    </>
                  }
                })}
                {detail.image_gallery_set.length > GALLERY_IMAGE_COUNT ? <p className="grid-gallery-number">+ {detail.image_gallery_set.length - GALLERY_IMAGE_COUNT}</p> : <p></p>
                }
              </div>

            </div>

          </div>
        })
      }

      {
        isOpen && (
          <>
            <div className='drop-down'>
              <button onClick={handleClosePreview} title='Close Slider' className='preview-btn'>X</button>
              <CarouselSlider singleGalleryData={singleGalleryData[0]} getAllAlbumsData={getAllAlbumsData} handlePreview ={handlePreview}/>
            </div>
          </>
        )
      }
    </>
  )
}

export default MyAlbum

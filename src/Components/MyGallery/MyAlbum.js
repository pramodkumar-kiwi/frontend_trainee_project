import React, { useState } from 'react'
import './index.css'
import CarouselSlider from './Carousel';
import { albumListing_deleteData, Gallery_putData } from '../Services'
import { RiDeleteBinFill } from 'react-icons/ri';
import { BsFillPencilFill, BsInfoLg } from 'react-icons/bs';
import { GALLERY_IMAGE_COUNT } from '../Constants'

const MyAlbum = ({ files, setFile, myAlbumDetails, getAllAlbumsData, galleryName, setGalleryCreated, setGalleryName }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [singleGalleryData, setSingleGalleryData] = useState([]);
  const [isTitleEdit, setIsTitleEdit] = useState(true);
  const [gName, setGName] = useState('')
  const [albumID, setAlbumID] = useState('');


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
    if (window.confirm("Are you sure you want to delete this Album?")) {
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

  }

  const handleEditAlbum = (myGalleryName, galleryID) => {
    // console.log(galleryID);
    setAlbumID(galleryID);
    setGalleryName(myGalleryName)
    setIsEditOpen(!isEditOpen);
    setIsTitleEdit(!isTitleEdit);
  }

  const galleryNameEdit = (e) => {
    setGalleryName(e.target.value);
  }

  const handleEditClose = () => {
    getAllAlbumsData();
    setIsTitleEdit(!isTitleEdit);
    setIsEditOpen(!isEditOpen);

  }

  const handleEditClick = async (galleryID) => {

    await Gallery_putData(galleryID, {
      gallery_name: galleryName
    }).then((response) => {
      setIsEditOpen(!isEditOpen);
      getAllAlbumsData();
      return response.data;
    })
      .catch((error) => {
        return error;
      })



  }

  return (
    <>
      {

        myAlbumDetails.map((detail, i) => {

          return <div className='container' key={i} >

            <h3 className='galleryHeading'>{detail["gallery_name"]}
              <RiDeleteBinFill className='del' title='Delete Your Album' onClick={() => handleDeleteAlbum(detail["id"])} />
              <BsFillPencilFill className='edit' title='Edit Your Album' onClick={() => handleEditAlbum(detail["gallery_name"], detail["id"])} />
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
              <CarouselSlider singleGalleryData={singleGalleryData[0]} getAllAlbumsData={getAllAlbumsData} handlePreview={handlePreview} />
            </div>
          </>
        )
      }
      {
        isEditOpen && (
          <>
            <div className="modal">
              <div className="modal-content">
                <div className="modal-header">
                  <h3>GALLERY NAME:</h3>
                  <h4>{isTitleEdit ? <input value={galleryName} onChange={galleryNameEdit} /> : <h3>{galleryName}</h3>}<BsFillPencilFill className='edit' title='Edit Your Album' onClick={() => setIsTitleEdit(!isTitleEdit)} /></h4>
                </div>
                <div className="modal-footer">
                  <button onClick={handleEditClose}>Cancel</button>
                  <button onClick={() => handleEditClick(albumID)}>Save</button>

                </div>
              </div>
            </div>
          </>
        )
      }


    </>
  )
}

export default MyAlbum
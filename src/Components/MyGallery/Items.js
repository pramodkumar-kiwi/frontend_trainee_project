import React from 'react'
import { Paper } from '@mui/material'
import { RiDeleteBinFill } from 'react-icons/ri';
import { ImageListing_deleteData } from '../Services'

const Item = ({ item, getAllAlbumsData, handlePreview}) => {

  const handleDeleteImage = (itemID) => {
    ImageListing_deleteData(itemID)
      .then(response => {
        handlePreview()
        getAllAlbumsData();
        return response;
      })
      .catch(error => {
        return error
      })
  }


  return (
    <Paper>
      <div className='myItem-container'>
        <img src={item.image} alt={item.id} className='myItem' />
      </div>
      <RiDeleteBinFill className='deleteImage' title='Delete Image' onClick={() => handleDeleteImage(item.id)} />
    </Paper>

  )
}

export default Item

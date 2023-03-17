import React from 'react'
import './index.css'
import MyAlbum from './MyAlbum'

const Albums = ({myAlbumDetails}) => {

  return (
    <div>
      {/* <p className='no-albums_text'>No Albums Found</p> */}
      <MyAlbum myAlbumDetails={myAlbumDetails}/>
    </div>
  )
}

export default Albums

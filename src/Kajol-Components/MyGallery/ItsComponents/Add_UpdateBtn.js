import React, { useState } from 'react'
import { addAlbum } from '../../Constants';

const Add_UpdateBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <i className="fa
      -solid fa-plus add-icon-icon" onClick={handleButtonClick}></i>


      {isOpen && (
        <>
          <div className='drop-down'>
          <button className='btn' onClick={handleButtonClick}>X</button>
          <div className='centre'>
            <h1 className='h1'>Album Name</h1>
            
            <input type='text' className='add_update-inp'/>
            <button>{addAlbum}</button>
          </div>
          </div>
        </>
      )}

    </div>
  )
}

export default Add_UpdateBtn

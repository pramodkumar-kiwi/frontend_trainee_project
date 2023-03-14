import React, { useState } from 'react'
import Modal from './Modal'

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
        <Modal/>
      )}

    </div>
  )
}

export default Add_UpdateBtn

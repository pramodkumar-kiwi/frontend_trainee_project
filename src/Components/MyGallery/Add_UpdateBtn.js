import React, { useState } from 'react'

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
              <h1 className='h1'>ALBUM NAME</h1>
              <input type='text' className='add_update-inp' />
            </div>
            <div style={{ display: 'flex' }}>
              <h3 style={{ margin: '0' }}>Add your files here: </h3>
              <input type="file" id="files" name="files" multiple></input>
            </div>

          </div>
        </>
      )}

    </div>
  )
}

export default Add_UpdateBtn

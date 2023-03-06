import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Add_UpdateBtn = () => {
  return (
    <div>
      <button className='add-update-btn'><FontAwesomeIcon icon={faCoffee} /></button>
    </div>
  )
}

export default Add_UpdateBtn

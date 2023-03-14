import React, {useState} from 'react'
import './index.css'
const MyAlbum = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
      setHover(!hover)
    }
    
    return (
        <div className='conatiner' >
            <div className='slide-show' title='Click to Slideshow' onMouseEnter={onHover} onMouseLeave={onHover}>
            <div className="grid-container">
                    <div className="grid-item">1</div>
                    <div className="grid-item">2</div>
                    <div className="grid-item">3</div>
                    <div className="grid-item">4</div>
                </div>
            </div>
        </div>
    )
}

export default MyAlbum

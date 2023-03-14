import React from 'react'
import slider from '../../slider.json'
import Carousel from 'react-material-ui-carousel'
import Item from './Items'

const Carousel_Slider = () => {
    return (
        <Carousel >
            {
                slider.map(item => <Item key={item.id} item={item} />)
            }
        </Carousel>
    )
}

export default Carousel_Slider

import React, { useEffect } from 'react'
import slider from '../../slider.json'
import Carousel from 'react-material-ui-carousel'
import Item from './Items'
import { imageListing_getData } from '../Services'

const Carousel_Slider = () => {

    useEffect(() => {
        imageListing_getData().then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    });


    return (
        <Carousel >
            {
                slider.map(item => <Item key={item.id} item={item} />)
            }
        </Carousel>
    )
}

export default Carousel_Slider

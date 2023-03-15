import React, { useState, useEffect } from 'react'

import Carousel from 'react-material-ui-carousel'
import Item from './Items'
import { imageListing_getData } from '../Services'
// import axios from 'axios';

const Carousel_Slider = () => {

    const [myImageDetails, setMyImageDetails] = useState([]);


    const getAllImageData = () => {
        imageListing_getData()
            .then((response) => {
                console.log(response.data);
                setMyImageDetails(response.data);
            })

    }

    useEffect(() => {
        getAllImageData();
    }, [])

    return (
        <Carousel >
            {
                myImageDetails.map(item => <Item key={item.id} item={item} />)
            }
        </Carousel>
    )
}

export default Carousel_Slider

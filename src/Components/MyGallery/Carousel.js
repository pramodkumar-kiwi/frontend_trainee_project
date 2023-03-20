import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Item from './Items'

const CarouselSlider = ({singleGalleryData, getAllAlbumsData, handlePreview}) => {

    return (
        <Carousel >
            {
                singleGalleryData && singleGalleryData.image_gallery_set.map(item => 
                <Item key={item.id} item={item} getAllAlbumsData={getAllAlbumsData} handlePreview={handlePreview}/>)
                } 

        </Carousel>
    )
}

export default CarouselSlider

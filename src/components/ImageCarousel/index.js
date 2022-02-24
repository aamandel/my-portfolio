import React, { useState } from 'react';
import './ImageCarousel.css';
import CarouselButton from './CarouselButton';

const ImageCarousel = (props) => {
    const { galleryPaths } = props
    const [imageIndex, setImageIndex] = useState(1)

    const nextImage = () => {
        if (imageIndex !== galleryPaths.length) {
            setImageIndex(imageIndex + 1)
        }
        else if (imageIndex === galleryPaths.length) {
            setImageIndex(1)
        }
    }

    const prevImage = () => {
        if (imageIndex !== 1) {
            setImageIndex(imageIndex - 1)
        }
        else if (imageIndex === 1) {
            setImageIndex(galleryPaths.length)
        }
    }

    const selectIndex = index => (
        setImageIndex(index)
    )

    return (
        <div className='carousel-container'>
            {galleryPaths.map((obj, index) => {
                return (
                    <div className={imageIndex === index + 1 ? 'slide active-anim' : 'slide'} key={obj.id}>
                        <img
                            src={process.env.PUBLIC_URL + obj.path}
                            alt=''
                        />
                    </div>
                )
            })}
            <CarouselButton slideImage={nextImage} direction={"next"} />
            <CarouselButton slideImage={prevImage} direction={"prev"} />

            <div className='container-dots'>
                {Array.from({ length: galleryPaths.length }).map((item, index) => (
                    <div
                        onClick={() => selectIndex(index + 1)}
                        className={imageIndex === index + 1 ? 'dot active' : 'dot'}
                        key={index}>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImageCarousel;
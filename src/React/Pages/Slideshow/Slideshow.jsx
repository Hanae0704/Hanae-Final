import React from 'react';
import styled from 'styled-components';
import { slides } from './slidesData.js';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slideshow = () => {

    const renderSlides = () => {
        return slides.map((slide,idx) => {

            return (
            <div className="box" key={ idx }>
                <img src={ slide.image } alt={ slide.title }/>
            </div>
            );
        });
    }

    return (
        <SlideshowStyled className='Slideshow'>
            <Carousel
            showThumbs={false}
            showIndicators={false}
            autoPlay={true}
            infiniteLoop={true}
            showArrows={true}
            transitionTime={1000}>
            
            { renderSlides() }
            </Carousel>
        </SlideshowStyled>
    );
}

export default Slideshow;

const SlideshowStyled = styled.div`

    
`;
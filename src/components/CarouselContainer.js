import React, {useState, useEffect} from 'react'
import RBCarousel from 'react-bootstrap-carousel';

import {fetchMovies} from '../service';
import Carousel from './Carousel'

const CarouselContainer = () => {
    const [playingnow, setPlayingNow] = useState([])
    

    useEffect(() => {
        const fetchApi = async() => {
            setPlayingNow( await fetchMovies())  
        }
        
        fetchApi()    
    }, []);

 return(
        <>
        <RBCarousel
            animation={true}
            autoplay={true}
            pauseOnVisibility={true}
            slidesshowSpeed={5000}
            version={4}
        >
        {playingnow.slice(0,5).map((item, index) => (
            <Carousel
                key={index}
                item={item}
            />
        ) )      
        }
        
        </RBCarousel>
        </>
    )      
}

export default CarouselContainer



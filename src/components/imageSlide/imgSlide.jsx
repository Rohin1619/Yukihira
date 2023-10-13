import React, { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const images = [
    '/imgSlide/burger.png', 
    '/imgSlide/pizza.png',
    '/imgSlide/momo.png',
    '/imgSlide/cold.png',
    '/imgSlide/jd.png',
    '/imgSlide/hot.png'
];

const AutomaticSlideshow = () => {
    const [myIndex, setMyIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setMyIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Card>
            <CardMedia
                component="img"
                alt="Slideshow"
                height="300"
                image={ images[myIndex] }
                sx={ { objectFit: 'cover', mt: '60px' } }
            />
        </Card>
    );
};

export default AutomaticSlideshow;


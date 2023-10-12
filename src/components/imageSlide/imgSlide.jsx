import React, { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const images = [
    '/imgSlide/burger.jpg', 
    '/imgSlide/pizza.jpg',
    '/imgSlide/momo.jpg',
    '/imgSlide/blended mocha.jpg',
    '/imgSlide/jd.jpg',
    '/imgSlide/latte.jpg'
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
                style={ { objectFit: 'cover' } }
            />
        </Card>
    );
};

export default AutomaticSlideshow;


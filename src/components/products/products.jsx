import React from 'react';

import  Box  from '@mui/material/Box';
import { Typography } from '@mui/material';

import { foodProducts, beverageProducts } from '../../constants/productsConstants';

import { styles } from './styles';

const Products = () => {
    const foodProductsArray = Object.values(foodProducts).flatMap((category) => category);
    return (
        <>
        <Box sx={styles.root}>
            <Typography>
                Items
            </Typography>
            {foodProductsArray.map((foodProducts) => {            
                return(
                <li key={foodProducts.id}>{foodProducts.name}</li>
            )})}
        </Box>
        </>
    );
}
export default Products;

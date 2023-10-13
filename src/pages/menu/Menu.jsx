import React from 'react'
import { Link, useHistory } from 'react-router-dom';

import Box from '@mui/material/Box'

import Products from '../../components/products/products'
import SearchBar from '../../components/searchBar/searchBar'
import { foodProducts, beverageProducts } from "../../constants/productsConstants.js";
import TabWithProducts from '../../components/tablePanel/tablePanel';
import AutomaticSlideshow from '../../components/imageSlide/imgSlide';
import { styles } from './styles'

const Menu = () => {
  const history = useHistory();

  return (
    <>
      <Box id="mainbox" sx={ styles.root }>
        <Box id="innerBox" sx={ styles.searchbar }>
          <SearchBar />
        </Box>
        <AutomaticSlideshow />
        <Box style={ { display: 'flex' } }>
          <Box sx={styles.itemTab}>
            <TabWithProducts />
          </Box>
          <Box sx={ styles.products }>
            <Products data={ foodProducts } />
            <Products data={ beverageProducts } />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Menu

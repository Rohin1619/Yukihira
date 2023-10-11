import React from 'react'

import Box from '@mui/material/Box'

import Products from '../../components/products/products'
import SearchBar from '../../components/searchBar/searchBar'
import { foodProducts, beverageProducts} from "../../constants/productsConstants.js";
import TabWithProducts from '../../components/tablePanel/tablePanel';

import { styles } from './styles'

const Menu = () => {
  return (
    <>
      <Box sx={styles.root}>
        <SearchBar />
        <Box style={ { display: 'flex' } }>
        <TabWithProducts />
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

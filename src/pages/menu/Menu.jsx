import React from 'react'

import Box from '@mui/material/Box'

import Products from '../../components/products/products'
import SearchBar from '../../components/searchBar/searchBar'
import {
  foodProducts,
  beverageProducts,
} from "../../constants/productsConstants.js";

import { styles } from './styles'

const Menu = () => {
  return (
    <>
      <Box sx={styles.root}>
        <SearchBar />
        <Products data={ foodProducts } />
        <Products data= { beverageProducts } />
      </Box>
    </>
  )
}

export default Menu

import React from 'react'

import Box from '@mui/material/Box'

import Products from '../../components/products/products'
import SearchBar from '../../components/searchBar/searchBar'

import { styles } from './styles'

const Menu = () => {
  return (
    <>
      <Box sx={styles.root}>
        <SearchBar sx={styles.searchbar} />
        <Products />
      </Box>
    </>
  )
}

export default Menu

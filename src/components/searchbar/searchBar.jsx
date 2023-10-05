import React from 'react'

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';

import { styles } from './styles'

const SearchBar = () => {
    return (
        <>
            <Box sx={ styles.root }>
                <TextField label="Search..." id="itemSearch" variant="standard" sx={ styles.searchfield } />
                <IconButton type="button" sx={ { p: '10px' } } aria-label="search">
                    <SearchIcon fontSize="large" />
                </IconButton>
            </Box>
        </>
    )
}

export default SearchBar

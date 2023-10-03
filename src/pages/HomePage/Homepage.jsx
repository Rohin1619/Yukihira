import React from 'react'
import { useNavigate } from "react-router-dom";

import { Box, Container } from '@mui/material'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { styles } from './styles'

const Homepage = () => {

  const navigate = useNavigate();

  const handleLearnMore = () =>{
    navigate("/aboutus");
  }

  const handleMenu = () => {
    navigate("/menu");
  }

  return (
  <>
  <Box sx={styles.root}>
        
      <Container sx={ styles.container }>
        <img
          src="/WLogo.png" 
          alt="Centered Image"
          style={ styles.image }
        />
        <Typography variant="h2" sx={ styles.title }>
          Yukihira Family Dine
        </Typography>
        <Typography variant='h4' sx={ styles.title }>
          Great Food & Good Vibes
        </Typography>
        <Box>
            <Button sx={ styles.button } variant="outlined" onClick={ handleLearnMore }>
            Learn More
          </Button>
            <Button sx={ styles.button2 } variant="contained" onClick={ handleMenu }>
            View Menu
            </Button>
        </Box>

      </Container>
  </Box>
  </>
  )
}

export default Homepage

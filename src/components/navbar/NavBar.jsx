import React, {useState} from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


import { styles } from './styles'

const pages = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Menu',
    link: '/',
  },
  {
    label: 'Contact',
    link: '/',
  },
  {
    label: 'Feedback',
    link: '/',
  },
]

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  

  return (
    <Box style={styles.root}>
      <AppBar position="static" >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={ { xs: 'flex' } }>
            <Avatar alt="Remy Sharp" src="/WLogo.png" />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={ {
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              } }
            >
              Yukihira Family Dine
            </Typography>

            <Box sx={ { flexGrow: 1, display: { xs: 'flex', md: 'none' } } }>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar-nav"
                aria-haspopup="true"
                onClick={ handleOpenNavMenu }
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar-nav"
                anchorEl={ anchorElNav }
                anchorOrigin={ {
                  vertical: 'bottom',
                  horizontal: 'left',
                } }
                keepMounted
                transformOrigin={ {
                  vertical: 'top',
                  horizontal: 'left',
                } }
                open={ Boolean(anchorElNav) }
                onClose={ handleCloseNavMenu }
                sx={ {
                  display: { xs: 'block', md: 'none' },
                } }
              >
                { pages.map((page) => (
                  <MenuItem key={ page.label } onClick={ handleCloseNavMenu }>
                    <Typography textAlign="center">{ page.label }</Typography>
                  </MenuItem>
                )) }
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default NavBar

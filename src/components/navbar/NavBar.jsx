import React, { useState } from 'react'
import { useSelector } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

import CartDialog from '../dialog/cartDialog';

import { styles } from './styles'


const pages = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Menu',
    link: '/menu',
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
  const cartItems = useSelector((state) => state.cart.items);
  const [open, setOpen] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClickOpenDialog = () => {
    setOpen(true);
  };
  const handleCloseDialog = () => {
    setOpen(false);
  };

  const calculateTotalItemCount = () => {
    let totalCount = 0;
    cartItems.forEach(() => {
      totalCount++;
    });
    return totalCount;
  };

  return (
    <Box sx={ styles.root }>
      <AppBar position="static" sx={ styles.appbar }>
        <Container maxWidth="xl" sx={ styles.container } >
          <Toolbar disableGutters sx={ { display: 'flex', justifyContent: 'space-between', width: '95vw' } }>
            <img
              src="/WLogo.png"
              alt="Centered Image"
              style={ styles.image }
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={ styles.title1 }
            >
              Yukihira Family Dine
            </Typography>
            <Box sx={ { flexGrow: 1, display: { xs: 'none', md: 'flex' } } }>
              { pages.map((page) => (
                <Button
                  variant='text'
                  href="/"
                  key={ page.label }
                  onClick={ handleCloseNavMenu }
                  sx={ styles.menu }
                >
                  { page.label }
                </Button>
              )) }
            </Box>
            <Box>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar-nav"
                aria-haspopup="true"
                onClick={ handleOpenNavMenu }
                color="inherit"
                sx={ { display: { xs: 'flex', md: 'none', ml: 0 } } }
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
                    <Typography textAlign="center" >{ page.label }</Typography>
                  </MenuItem>
                )) }
              </Menu>
            </Box>
            <IconButton
              aria-label="cart"
              sx={ styles.iconbtn }
              onClick={handleClickOpenDialog}
              >
              <Badge badgeContent={ calculateTotalItemCount() } color="secondary">
                <ShoppingCartIcon sx={ styles.cart } />
              </Badge>
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <CartDialog open={ open } onClose={ handleCloseDialog } />
    </Box>
  )
}

export default NavBar

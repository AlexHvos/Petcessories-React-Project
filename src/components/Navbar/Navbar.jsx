import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { appbar, typography, img, div } from './styles';

const Navbar = (cartTotal) => {
  const location = useLocation();

  return (
    <div>
        <AppBar position='fixed' color='inherit' sx = {appbar}>
            <Toolbar>
                <Typography component = {Link} to = "/" variant="h6" color='inherit' sx = {typography}>
                    <img src='../../images/shop logo.jpg' alt="Petcessories" height="25px"sx = {img}></img>
                    Petcessories
                </Typography>
                <div sx = {div}/>
                {location.pathname === '/' && (
                <div>
                  <IconButton component = {Link} to = "/cart" aria-label='show cart items' color="inherit">
                    <Badge badgeContent = {cartTotal.length} color="secondary">
                      <ShoppingCart />
                    </Badge>
                  </IconButton>
                </div> )}
            </Toolbar>
        </AppBar>
        <Outlet/>
    </div>
  )
}

export default Navbar;
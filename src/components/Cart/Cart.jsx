import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { title, emptyButton, addOrder, cardDetails, link } from './styles';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = ( cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart ) => {
  const isEmpty = (cart.length === 0);

  const EmptyCart = () => (
      <Typography variant = "subtitle1">
          You have no items in your shopping cart
          <Link to = "/categories" sx = {link}>try adding some...</Link>
      </Typography>
  );
  //insert code for subtotal,
  const FilledCart = () => (
      <>
        <Grid container spacing = {3}>
            {cart.map((product) => (
                <Grid item key={product.id} xs={12} sm={4}>
                    <CartItem item = {product} 
                    handleUpdateCartQty = {handleUpdateCartQty} handleRemoveFromCart = {handleRemoveFromCart}/>
                </Grid>
            ))}
        </Grid>
        <div sx = {cardDetails}>
            <Typography variant = "h4">
                Subtotal: 
            </Typography>
            <div>
                <Button sx = {emptyButton} size = "large" type = "button" variant = "contained" color = "secondary"
                onClick = {handleEmptyCart}>
                    Empty Cart
                </Button>
                <Button sx = {addOrder} size = "large" type = "button" variant = "contained" color = "primary">
                    Add Order
                </Button>
            </div>
        </div>
      </>
  );
  return (
    <div>
        <Container>
            <Typography sx = {title} variant = "h3" gutterBottom>Your Shopping Cart</Typography>
            { isEmpty ? <EmptyCart /> : <FilledCart />}
        </Container>
    </div>
  )
}

export default Cart;
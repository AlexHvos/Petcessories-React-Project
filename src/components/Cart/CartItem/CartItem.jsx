import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import { media, cardContent, cardActions, buttons } from './styles';

const CartItem = ( product, handleUpdateCartQty, handleRemoveFromCart) => {
  return (
    <Card>
        <CardMedia image = {product.image} alt = {product.name} sx = {media} />
        <CardContent sx = {cardContent}>
            <Typography variant = "h4">{product.name}</Typography>
            <Typography variant = "h5">{product.price}</Typography>
        </CardContent>
        <CardActions sx = {cardActions}>
            <div sx = {buttons}>
                <Button type = "button" size = "small" 
                 onClick = {() => handleUpdateCartQty(product.prodID, product.quantity - 1)}> - </Button>
                <Typography>{product.quantity}</Typography>
                <Button type = "button" size = "small" 
                 onClick = {() => handleUpdateCartQty(product.prodID, product.quantity + 1)}> + </Button>
            </div>
            <Button variant = "contained" type = "button" color = "secondary"
             onClick = {() => handleRemoveFromCart(product.prodID)}> Remove </Button>
        </CardActions>
    </Card>
  )
}

export default CartItem;
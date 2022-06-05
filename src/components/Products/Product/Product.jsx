import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { card, cardmedia, cardcontent, cardactions } from './styles';

const Product = ({product, handleAddToCart}) => {
  return (
    <Card sx={card} >
        <CardMedia image={product.image} title={product.name}
        sx={cardmedia}/>
        <CardContent sx={cardcontent}>
            <div>
                <Typography variant='h5' gutterBottom>
                    {product.name}
                </Typography>
                <Typography variant='h5'>
                    {product.price}
                </Typography>
            </div>
            <Typography variant='body2' color='textSecondary'>
                {product.description}
            </Typography>
        </CardContent>
        <CardActions disableSpacing sx={cardactions}>
            <IconButton aria-label='Add to Cart' onClick={() => handleAddToCart(product)}>
                <AddShoppingCart />
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default Product;
import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { card, cardmedia, cardcontent } from './styles';

const Category = ({category}) => {
  return (
    <Card sx={card} >
        <CardMedia image={category.image} title={category.name}
        sx={cardmedia}/>
        <CardContent sx={cardcontent}>
            <div>
                <Typography variant='h5' gutterBottom>
                    {category.name}
                </Typography>
            </div>
            <Typography variant='body2' color='textSecondary'>
                {category.description}
            </Typography>
        </CardContent>
    </Card>
  )
}

export default Category;
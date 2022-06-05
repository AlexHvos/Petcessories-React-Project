import React from "react";
import { Grid } from '@mui/material';
import Product from "./Product/Product";
import axios from "axios";
import { useEffect } from "react";
import { content, div } from "./styles";


const Products = ({handleAddToCart}) => {
    const [products, setProducts] = React.useState([]);
    useEffect(() => {
        let productsString = localStorage.getItem('productsList');
        setProducts(JSON.parse(productsString));
    }, []);
    return (
        <main sx = {content}>
        <div sx = {div}/>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} handleAddToCart={handleAddToCart}/>
                </Grid>
            ))}
        </Grid>
        </main>
    )
}

export default Products;
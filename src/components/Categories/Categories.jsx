import React from 'react';
import { Grid } from '@mui/material';
import Category from './Category/Category';
import { useEffect } from "react";
import { content, div } from "./styles";

const Categories = () => {
  const [categories, setCategories] = React.useState([]);
  useEffect(() => {
    let categoriesString = localStorage.getItem('categoriesList');
    setCategories(JSON.parse(categoriesString));
  },[]);
  return (
    <main sx = {content}>
    <div sx = {div}/>
        <Grid container justify="center" spacing={4}>
            {categories.map((category) => (
                <Grid item key={category.id} xs={12} sm={6} md={4} lg={3}>
                    <Category category={category}/>
                </Grid>
            ))}
        </Grid>
    </main>
  )
}

export default Categories;
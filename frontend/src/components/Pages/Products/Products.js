import React, { useContext, useEffect } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

import useStyles from './styles';
import CustomCard from './CustomCard/CustomCard';
import { MainContext } from '../../../context/context';

const Products = () => {
    const classes = useStyles();
    const { getProducts, products } = useContext(MainContext);

    useEffect(() => {
        getProducts();
    }, []);
    
    return (
        <Container className={classes.container}>
            <Typography className={classes.title} variant="h3">Продавница</Typography>
                <Grid container justify="space-between" alignItems="stretch" spacing={2}>
                    {products.allProducts ? products.allProducts.map((product) => {
                        return (<Grid key={product._id} item xs={6} sm={4}>
                            <CustomCard photo={product.photo} title={product.title} price={product.price} description={product.description} weight={product.weight} _id={product._id} quantity={product.quantity} />
                        </Grid>) 
                    }) : "Нема производи"}
                </Grid>
        </Container>
    );
};

export default Products;

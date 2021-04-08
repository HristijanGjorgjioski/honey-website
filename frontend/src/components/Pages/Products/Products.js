import React, { useContext, useEffect } from 'react'
import { Container, Grid, Typography, CircularProgress } from '@material-ui/core'

import useStyles from './styles';
import CustomCard from './CustomCard/CustomCard';
import { MainContext } from '../../../context/context';

const Products = () => {
    const classes = useStyles();
    const { getProducts, products } = useContext(MainContext);
    
    useEffect(() => {
        getProducts();
    }, [])


    // const Products = products.allProducts.map((product, index) => {
    //     return (
            
    //     )
    // });

    return (
        <Container className={classes.container}>
            <Typography className={classes.title} variant="h3">Продавница</Typography>
                <Grid container justify="space-between" alignItems="stretch" spacing={2}>
                    {/* {!products.allProducts.length ? <CircularProgress /> : (
                        products.allProducts.map((product) => {
                            <Grid key={product._id} item xs={6} sm={4}>
                                <CustomCard photo={product.photo} title={product.title} price={product.price} description={product.description} weight={product.weight} id={product.id} quantity={product.quantity} />
                            </Grid>
                        })
                    )} */}
                </Grid>
        </Container>
    )
}

export default Products;

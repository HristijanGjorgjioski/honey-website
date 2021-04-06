import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'

import useStyles from './styles';
import CustomCard from './CustomCard/CustomCard';

const Products = () => {
    const classes = useStyles();

    const productsArray = [
        {
            title: 'Мед',
            price: '600',
            weight: '1 кило',
            description: '100% природен планински мед!',
            photo: 'https://cdn.pixabay.com/photo/2015/06/27/16/35/honey-823614_960_720.jpg'
        },
        {
            title: 'Мед2',
            price: '700',
            weight: '1 кило',
            description: '106% природен планински мед!',
            photo: 'https://cdn.pixabay.com/photo/2015/06/27/16/35/honey-823614_960_720.jpg'
        },
        {
            title: 'Мед3',
            price: '1000',
            weight: '1 кило',
            description: '111% природен планински мед!',
            photo: 'https://cdn.pixabay.com/photo/2015/06/27/16/35/honey-823614_960_720.jpg'
        }
    ];

    const products = productsArray.map((product) => {
        return (
            <Grid item xs={5} sm={4}>
                 <CustomCard photo={product.photo} title={product.title} price={product.price} description={product.description} weight={product.weight} />
            </Grid>
        )
    })

    return (
        <Container className={classes.container}>
            <Typography className={classes.title} variant="h3">Продавница</Typography>
            <Grid container justify="space-between" alignItems="strecth" spacing={2}>
                {products}
            </Grid>
        </Container>
    )
}

export default Products

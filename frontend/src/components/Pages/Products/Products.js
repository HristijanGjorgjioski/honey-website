import React from 'react'
import { Container, Grid, Typography, Button, Card, CardMedia, CardContent, CardActions, CardActionArea } from '@material-ui/core'

import useStyles from './styles';

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
                 <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        component="img"
                        image={product.photo}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {product.title}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                            {product.description}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {product.price} денари
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Share
                        </Button>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
                </Card>
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

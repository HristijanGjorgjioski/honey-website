import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Container, Paper, Button, Typography, CardMedia, Grid } from '@material-ui/core';

import useStyles from './styles';

const Testimonials = () => {
    const classes = useStyles();

    const items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image: 'https://www.bioid.com/wp-content/uploads/face-database-bioid.jpg'
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image: 'https://cdn.pocket-lint.com/r/s/1200x/assets/images/142207-phones-feature-what-is-apple-face-id-and-how-does-it-work-image1-5d72kjh6lq.jpg'
        }
    ]

    const Item = ({ item }) => {
        return (
            <Paper className={classes.paper}>
                <Grid container>
                    <Grid className={classes.grid1} item xs={12} sm={12}>
                        <CardMedia style={{ width: '200px', height: '200px' }} component="img" image={item.image} />
                        <Typography>{item.name}</Typography>
                    </Grid>
                    <Grid className={classes.grid1} item xs={12} sm={12}>
                        <Typography>{item.description}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        )
    }

    return (
        <Container className={classes.container}>
            <Typography className={classes.title}>Дел од нашите клиенти</Typography>
            <Carousel className={classes.carousel}>
                {items.map( (item, i) => <Item key={i} item={item} /> )}
            </Carousel>
        </Container>
    )
}

export default Testimonials

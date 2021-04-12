import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Container, Paper, Typography, CardMedia, Grid, Fade } from '@material-ui/core';

import useStyles from './styles';
import testimonialsData from './testimonialsData';

const Testimonials = () => {
    const classes = useStyles();

    const [show, setShow] = useState(false);
    let whyUsPosition = 1600;

    useEffect(() => {
        function onScroll() {
            let currentPosition = window.pageYOffset; 
            if(window.innerWidth < 599) {
                whyUsPosition = 3500;
            }
            if(currentPosition > whyUsPosition) {
                setShow(true);
            } else {
                setShow(false)
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [window.pageYOffset])

    const Item = ({ item }) => {
        return (
            <Paper elevation={4} className={classes.paper}>
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
        <Fade in={show} timeout={{ enter: 2000 }}>
            <Paper elevation={4} className={classes.paper}>
                <Container className={classes.container}>
                    <Typography className={classes.title}>Дел од нашите клиенти</Typography>
                    <Carousel className={classes.carousel}>
                        {testimonialsData.map( (data, index) => <Item key={index} item={data} /> )}
                    </Carousel>
                </Container>
            </Paper>
        </Fade>
    )
}

export default Testimonials

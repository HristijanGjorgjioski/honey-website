import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Container, Paper, Typography, Fade } from '@material-ui/core';

import useStyles from './styles';
import testimonialsData from './testimonialsData';
import Item from './Item/Item';

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
    }, [window.pageYOffset]);

    return (
        <Fade in={show} timeout={{ enter: 2000 }}>
            <Paper elevation={4} className={classes.paper}>
                <Container className={classes.container}>
                    <Typography className={classes.title}>Дел од нашите клиенти</Typography>
                    <Carousel className={classes.carousel}>
                        {testimonialsData.map((data, index) => <Item key={index} item={data} /> )}
                    </Carousel>
                </Container>
            </Paper>
        </Fade>
    );
};

export default Testimonials;

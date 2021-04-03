import React, { useState, useEffect } from 'react'
import { CardMedia, Container, Typography, Paper, Fade } from '@material-ui/core'

import useStyles from './styles';

import banner from '../../assets/images/banner.jfif';

const Banner = () => {
    const classes = useStyles();

    const [show, setShow] = useState(false);
    const whyUsPosition = 0;

    useEffect(() => {
        function onScroll() {
            let currentPosition = window.pageYOffset; 
            if(currentPosition) {
                setShow(true);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [true]);

    return (
        <Fade in={show} timeout={{ enter: 2500 }}>
            <Paper elevation={4} className={classes.paper}>
                <Container className={classes.container}>
                    <CardMedia className={classes.image} component="img" image={banner} />
                    <Typography className={classes.title} variant="h1" gutterBottom>Име - фирма</Typography>
                    <Typography className={classes.subtitle} variant="h6" gutterBottom>100% Природен Планински Мед!</Typography>
                </Container>
            </Paper>
        </Fade>
    )
}

export default Banner

import React, { useEffect, useState } from 'react';
import { CardMedia, Container, Grid, Typography, Fade, Paper } from '@material-ui/core';

import useStyles from './styles';
import galleryArray from './galleryData';

const Gallery = () => {
    const classes = useStyles();
    const [show, setShow] = useState(false);
    const galleryPosition = 200; // desktop & mobile

    useEffect(() => {
        function onScroll() {
            let currentPosition = window.pageYOffset; 
            if(currentPosition > galleryPosition) {
                setShow(true);
            } else {
                setShow(false)
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [window.pageYOffset])

    const images = galleryArray.map((item, index) => {
        return (
            <Grid key={index} item xs={12} sm={4} className={classes.grid}>
                <CardMedia className={classes.cardMedia} component="img" image={item.image} />
                <Typography className={classes.text}>{item.text}</Typography>
            </Grid>
        );
    });

    return (
        <>
            <Fade in={show} timeout={{ enter: 2000 }}>
                <Paper elevation={4} className={classes.paper}>
                    <Container className={classes.container}>
                        <Typography className={classes.title} variant="h1">Галерија</Typography>
                        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                            {images}
                        </Grid>
                    </Container>
                </Paper>
            </Fade>
        </>
    );
};

export default Gallery;

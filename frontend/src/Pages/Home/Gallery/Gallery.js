import React, { useEffect, useState } from 'react';
import { CardMedia, Container, Grid, Typography, Fade, Paper } from '@material-ui/core'

import useStyles from './styles';

const Gallery = () => {
    const galleryArray = [
        {
            image: 'https://images.unsplash.com/photo-1549269459-ba9e31874ef2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            text: 'Text 1'
        },
        {
            image: 'https://images.unsplash.com/photo-1471943311424-646960669fbc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            text: 'Text 2'
        },
        {
            image: 'https://images.unsplash.com/photo-1586779161164-d89795b07b71?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=282&q=80',
            text: 'Text 3'
        },
        {
            image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            text: 'Text 4'
        },
        {  
            image: 'https://cdn.pixabay.com/photo/2016/07/23/17/22/beekeeping-1537156_960_720.jpg',
            text: 'Text 5'
        },
        {
            image: 'https://cdn.pixabay.com/photo/2015/06/27/16/35/honey-823614_960_720.jpg',
            text: 'Text 6'
        },
    ];

    const classes = useStyles();
    
    const [show, setShow] = useState(false);
    const galleryPosition = 200;

    useEffect(() => {
        function onScroll() {
            let currentPosition = window.pageYOffset; 
            if(currentPosition > galleryPosition) {
                setShow(true);
            } else {
                setShow(false)
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [window.pageYOffset])

    const images = galleryArray.map((item, index) => {
        const container = {};

        container[item.image] = item.image;
        container.text = item.text;

        return (
            <Grid key={index} item xs={12} sm={4} className={classes.grid}>
                <CardMedia className={classes.cardMedia} component="img" image={item.image} />
                <Typography className={classes.text}>{item.text}</Typography>
            </Grid>
        )
    })

    return (
        <div>
            <Fade in={show} timeout={{ enter: 2500 }}>
                <Paper elevation={4} className={classes.paper}>
                    <Container className={classes.container}>
                        <Typography className={classes.title} variant="h1">Галерија</Typography>
                        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                            {images}
                        </Grid>
                    </Container>
                </Paper>
            </Fade>
        </div>
    )
}

export default Gallery

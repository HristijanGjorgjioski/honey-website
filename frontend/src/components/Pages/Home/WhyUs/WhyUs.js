import React, { useState, useEffect } from 'react'
import { CardMedia, Container, Grid, Typography, Fade, Paper } from '@material-ui/core'

import useStyles from './styles';
import whyUsData from './whyUsData';
import Item from './Item/Item';

const WhyUs = () => {
    const classes = useStyles();

    const [show, setShow] = useState(false);
    let whyUsPosition = 1200; // desktop
    // whyUsPosition = 2800; // mobile

    useEffect(() => {
        function onScroll() {
            let currentPosition = window.pageYOffset; 
            if(window.innerWidth < 599) {
                whyUsPosition = 2800;
            }
            if(currentPosition > whyUsPosition) {
                setShow(true);
            } else {
                setShow(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [window.pageYOffset]);

    const facts = whyUsData.map((argument, index) => {
        return (
            <Item argument={argument} index={index} />
        );
    });

    return (
        <Fade in={show} timeout={{ enter: 2000 }}>
            <Paper elevation={4} className={classes.paper}>
                <Container className={classes.container}>
                    <Typography className={classes.title}>Зошто би требало да купите мед од кај нас?</Typography>
                    <Grid className={classes.mainGrid} container justify="space-between" alignItems="stretch" spacing={1}>
                        <Grid className={classes.grid1} item sm={6} xs={12}>
                            {facts}
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <CardMedia component="img" image="https://cdn.pixabay.com/photo/2016/07/23/17/22/beekeeping-1537156_960_720.jpg" />
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </Fade>
    );
};

export default WhyUs;

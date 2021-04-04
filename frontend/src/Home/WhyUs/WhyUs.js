import React, { useState, useEffect } from 'react'
import { CardMedia, Container, Grid, Typography, Fade, Paper } from '@material-ui/core'
import { CheckCircleOutlineTwoTone } from '@material-ui/icons';

import useStyles from './styles';

const WhyUs = () => {
    const classes = useStyles();

    const argumentsArray = [
        {
            title: 'title1',
            subtitle: 'subtitle1'
        },
        {
            title: 'title2',
            subtitle: 'subtitle2'
        },
        {
            title: 'title3',
            subtitle: 'subtitle3'
        }
    ];

    const [show, setShow] = useState(false);
    let whyUsPosition = 1200;

    useEffect(() => {
        function onScroll() {
            let currentPosition = window.pageYOffset; 
            if(window.innerWidth < 599) {
                whyUsPosition = 2800;
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

    const facts = argumentsArray.map((argument, index) => {
        const container = {};

        container[argument.title] = argument.title;
        container.subtitle = argument.subtitle;

        return (
            <div key={index} style={{ display: 'flex', marginTop: '10%' }}>
                <CheckCircleOutlineTwoTone fontSize="large" style={{ color: 'green' }} />
                <div style={{ display: 'block' }}>
                    <Typography variant="body1">{argument.title}</Typography>
                    <Typography variant="body2">{argument.subtitle}</Typography>
                </div>
            </div>
        )
    })

    return (
        <div>
            <Fade in={show} timeout={{ enter: 2500 }}>
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
        </div>
    )
}

export default WhyUs

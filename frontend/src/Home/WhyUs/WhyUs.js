import React from 'react'
import { CardMedia, Container, Grid, Typography } from '@material-ui/core'
import { CheckCircleOutlineTwoTone } from '@material-ui/icons';

import useStyles from './styles';

const WhyUs = () => {
    const classes = useStyles();

    const argumentsArray = ['Аргумент 1', 'Аргумент 2', 'Аргумент 3'];

    const facts = argumentsArray.map((argument) => {
        return (
            <div style={{ display: 'flex' }}>
                <CheckCircleOutlineTwoTone fontSize="large" style={{ color: 'green' }} />
                <Typography>{argument}</Typography>
            </div>
        )
    })

    return (
        <Container className={classes.container}>
            <Typography className={classes.title}>Зошто би требало да купите мед од кај нас?</Typography>
            <Grid container justify="space-between" alignItems="stretch" spacing={1}>
                <Grid item sm={6} xs={12}>
                    {facts}
                </Grid>
                <Grid item sm={6} xs={12}>
                    <CardMedia component="img" image="https://cdn.pixabay.com/photo/2016/07/23/17/22/beekeeping-1537156_960_720.jpg" />
                </Grid>
            </Grid>
        </Container>
    )
}

export default WhyUs

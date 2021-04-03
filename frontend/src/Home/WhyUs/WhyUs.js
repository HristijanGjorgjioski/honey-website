import React from 'react'
import { CardMedia, Container, Grid, Typography } from '@material-ui/core'
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

    const facts = argumentsArray.map((argument) => {
        const container = {};

        container[argument.title] = argument.title;
        container.subtitle = argument.subtitle;

        return (
            <div style={{ display: 'flex', marginTop: '10%' }}>
                <CheckCircleOutlineTwoTone fontSize="large" style={{ color: 'green' }} />
                <div style={{ display: 'block' }}>
                    <Typography variant="body1">{argument.title}</Typography>
                    <Typography variant="body2">{argument.subtitle}</Typography>
                </div>
            </div>
        )
    })

    return (
        <Container className={classes.container}>
            <Typography className={classes.title}>Зошто би требало да купите мед од кај нас?</Typography>
            <Grid container justify="space-between" alignItems="stretch" spacing={1}>
                <Grid className={classes.grid1} item sm={6} xs={12}>
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

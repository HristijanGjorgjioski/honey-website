import React from 'react'
import { CardMedia, Container, Typography } from '@material-ui/core'

import useStyles from './styles';

import banner from '../../assets/images/banner.jfif';

const Banner = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <CardMedia className={classes.image} component="img" image={banner} />
            <Typography className={classes.title} variant="h1" gutterBottom>Име - фирма</Typography>
            <Typography className={classes.subtitle} variant="h6" gutterBottom>100% Природен Планински Мед!</Typography>
        </Container>
    )
}

export default Banner

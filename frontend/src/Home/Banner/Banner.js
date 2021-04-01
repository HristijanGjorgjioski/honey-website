import React from 'react'
import { CardMedia, Container } from '@material-ui/core'

import useStyles from './styles';

import banner from '../../assets/images/banner.jfif';

const Banner = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <CardMedia className={classes.image} component="img" image={banner} />
        </Container>
    )
}

export default Banner

import React from 'react';
import { Container } from '@material-ui/core'
import Banner from './Banner/Banner';

import useStyles from './styles';
import Gallery from './Gallery/Gallery';
import WhyUs from './WhyUs/WhyUs';

const Home = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Banner />
            <Gallery />
            <WhyUs />
        </Container>
    )
}

export default Home

import React from 'react';
import { Container } from '@material-ui/core'
import Banner from './Banner/Banner';

import useStyles from './styles';
import Gallery from './Gallery/Gallery';
import WhyUs from './WhyUs/WhyUs';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Banner />
            <Gallery />
            <WhyUs />
            <Testimonials />
        </Container>
    )
}

export default Home

import React from 'react';
import { Container } from '@material-ui/core'
import Banner from './Banner/Banner';

import useStyles from './styles';
import Gallery from './Gallery/Gallery';
import WhyUs from './WhyUs/WhyUs';
import Testimonials from './Testimonials/Testimonials';
import Info from './Info/Info';

const Home = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Banner />
            <Gallery />
            <WhyUs />
            <Testimonials />
            <Info />
        </Container>
    )
}

export default Home

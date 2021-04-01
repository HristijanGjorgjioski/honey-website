import React from 'react';
import { Container } from '@material-ui/core'
import Banner from './Banner/Banner';

import useStyles from './styles';

const Home = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Banner />
        </Container>
    )
}

export default Home

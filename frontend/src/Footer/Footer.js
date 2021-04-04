import React from 'react'
import { Container } from '@material-ui/core';

import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            Footer
        </Container>
    )
}

export default Footer

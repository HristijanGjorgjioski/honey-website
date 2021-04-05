import React from 'react'
import { Container, Typography } from '@material-ui/core'

import useStyles from './styles';

const About = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Typography variant="h3">OPA</Typography>
        </Container>
    )
}

export default About

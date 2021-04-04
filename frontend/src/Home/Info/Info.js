import { Container, Grid } from '@material-ui/core';
import React from 'react'

import useStyles from './styles';

const Info = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    OOO
                </Grid>
                <Grid item xs={12} sm={4}>
                    UUU
                </Grid>
                <Grid item xs={12} sm={4}>
                    AAA
                </Grid>
            </Grid>
        </Container>        
    )
}

export default Info

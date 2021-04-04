import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core';

import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Grid className={classes.gridContainer} container justify="space-between" alignItems="stretch" spacing={1}>
                <Grid className={classes.gridItem} item xs={6} sm={5}>
                    <Typography>GRID 1</Typography>
                </Grid>
                <Grid className={classes.gridItem} item xs={6} sm={5}>
                    <Typography>GRID 2</Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Footer

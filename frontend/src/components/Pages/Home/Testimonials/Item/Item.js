import React from 'react';
import { Paper, Typography, CardMedia, Grid } from '@material-ui/core';

import useStyles from '../styles';

const Item = ({ item }) => {
    const classes = useStyles();

    return (
        <Paper elevation={4} className={classes.paper}>
            <Grid container>
                <Grid className={classes.grid1} item xs={12} sm={12}>
                    <CardMedia style={{ width: '200px', height: '200px' }} component="img" image={item.image} />
                    <Typography>{item.name}</Typography>
                </Grid>
                <Grid className={classes.grid1} item xs={12} sm={12}>
                    <Typography>{item.description}</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Item;

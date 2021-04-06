import React from 'react'
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { RemoveShoppingCart, AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';
const Items = () => {
    const classes = useStyles();
    
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">Име на продукт</Typography>
                <Typography className={classes.pos} color="textSecondary">Цена: </Typography>
                <Typography variant="body2" component="p">Количина: </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"><AddShoppingCart color="primary" /></Button>
                <Button size="small"><RemoveShoppingCart color="secondary" /></Button>
            </CardActions>
        </Card>
    )
}

export default Items

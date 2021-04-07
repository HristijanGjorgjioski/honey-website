import React, { useContext } from 'react'
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { RemoveShoppingCart, AddShoppingCart } from '@material-ui/icons';

import { MainContext } from '../../../../context/context';
import useStyles from './styles';

const Items = () => {
    const { cart, addToCart, deleteFromCart } = useContext(MainContext);
    const classes = useStyles();
    console.log(cart);

    const cartItems = cart.map((item) => {
        return (
            <Card key={item.id} className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">{item.title}</Typography>
                    <Typography color="textSecondary">{item.description}</Typography>
                    <Typography color="textSecondary">Тежина: {item.weight}</Typography>
                    <Typography color="textSecondary">Цена: {item.price}</Typography>
                    <Typography variant="body2" component="p">Количина: {item.quantity}</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => addToCart(item)}><AddShoppingCart color="primary" /></Button>
                    <Button size="small" onClick={() => deleteFromCart(item.id)}><RemoveShoppingCart color="secondary" /></Button>
                </CardActions>   
            </Card>
        )
    })
    
    return (
        <>
            {cartItems}
        </>
    );
};

export default Items

  

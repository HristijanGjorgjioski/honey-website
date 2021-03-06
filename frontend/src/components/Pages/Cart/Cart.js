import React, { useContext } from 'react';
import { Container, Divider, Typography } from '@material-ui/core';

import useStyles from './styles';
import Items from './Items/Items';
import Form from './Form/Form';
import { MainContext } from '../../../context/context';

const Cart = () => {
    const classes = useStyles();
    const { totalPrice, cart } = useContext(MainContext);

    return (
        <Container className={classes.container}>
            {cart.length === 0 ? 
                <Typography variant="h4">Вашата кошница е празна!</Typography>
            : <>
                    <Typography variant="h3">Кошница</Typography>
                    <Items />
                    <Typography className={classes.total}>Вкупно: {totalPrice} денари</Typography>
                    <Divider />
                    <Form />
                </>
            }
        </Container>
    );
};

export default Cart;

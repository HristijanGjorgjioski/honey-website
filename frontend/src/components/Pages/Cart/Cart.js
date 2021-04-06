import React from 'react'
import { Container, Divider, Typography } from '@material-ui/core'

import useStyles from './styles';
import Items from './Items/Items';
import Form from './Form/Form';

const Cart = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Typography variant="h3">Кошница</Typography>
            <Items />
            <Typography className={classes.total}>Вкупно:</Typography>
            <Divider />
            <Form />
        </Container>
    )
}

export default Cart;

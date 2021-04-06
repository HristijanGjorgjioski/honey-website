import React from 'react'
import { Container, Typography } from '@material-ui/core'

import useStyles from './styles';
import Items from './Items/Items';

const Cart = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Typography variant="h3">Кошница</Typography>
            <Items />
        </Container>
    )
}

export default Cart

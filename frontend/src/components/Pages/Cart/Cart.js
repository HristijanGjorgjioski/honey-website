import React from 'react'
import { Container, Typography } from '@material-ui/core'

import useStyles from './styles';

const Cart = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Typography variant="h3">Кошница</Typography>
        </Container>
    )
}

export default Cart

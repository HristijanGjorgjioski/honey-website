import React from 'react'
import { Container, Typography } from '@material-ui/core'

import useStyles from './styles';

const Products = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Typography className={classes.title} variant="h3">Продавница</Typography>
        </Container>
    )
}

export default Products

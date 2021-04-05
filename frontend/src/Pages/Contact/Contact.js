import React from 'react';
import { Container } from '@material-ui/core'

import useStyles from './styles';
import Form from './Form/Form';

const Contact = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Form />
        </Container>
    )
}

export default Contact

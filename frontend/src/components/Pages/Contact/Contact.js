import React from 'react';
import { Container, Grid } from '@material-ui/core'

import useStyles from './styles';
import Form from './Form/Form';
import Infos from './Infos/Infos';

const Contact = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Grid container justify="space-between" alignItems="stretch" spacing={1}>
                <Grid item xs={12} sm={5}>
                    <Infos />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Form />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Contact

import React from 'react';
import { Container, Typography } from '@material-ui/core';

import useStyles from './styles';

const Infos = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Typography className={classes.title} variant="h3">Информации за нас</Typography>
            <Typography>Адреса:</Typography>
            <Typography>Тел. Број</Typography>
            <Typography>Е-маил:</Typography>
        </Container>
    );
};

export default Infos;

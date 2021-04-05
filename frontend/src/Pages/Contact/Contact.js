import React from 'react';
import { Button, Container, FormControl, FormHelperText, Input, InputLabel, TextField, Typography } from '@material-ui/core'

import useStyles from './styles';

const Contact = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Typography className={classes.title} variant="h3">КОНТАКТИРАЈТЕ НЕ'</Typography>
            <form autoComplete="off" className={classes.form}>
                <TextField name="name" variant="outlined" label="Име" fullWidth />
                <TextField name="number" variant="outlined" label="Тел. Број" fullWidth />
                <TextField name="email" variant="outlined" label="Е-маил Адреса" fullWidth />
                <TextField name="message" variant="outlined" multiline rows={4} label="Вашата Порака" fullWidth />
            </form>
        </Container>
    )
}

export default Contact

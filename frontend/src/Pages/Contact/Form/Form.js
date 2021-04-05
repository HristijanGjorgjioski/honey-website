import React from 'react'
import { Typography, TextField, Button } from '@material-ui/core';

import useStyles from './styles';

const Form = () => {
    const classes = useStyles();

    return (
        <>
            <Typography className={classes.title} variant="h3">КОНТАКТИРАЈТЕ НЕ'</Typography>
            <form autoComplete="off" className={classes.form}>
                <TextField name="name" variant="outlined" label="Име" fullWidth />
                <TextField className={classes.textfield} name="number" variant="outlined" label="Тел. Број" fullWidth />
                <TextField className={classes.textfield} name="email" variant="outlined" label="Е-маил Адреса" fullWidth />
                <TextField className={classes.textfield} name="message" variant="outlined" multiline rows={4} label="Вашата Порака" fullWidth />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            </form>
        </>
    )
}

export default Form

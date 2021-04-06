import React from 'react'
import { TextField, Button, Container, FormHelperText } from '@material-ui/core';

import useStyles from './styles';

const Form = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <form autoComplete="off" className={classes.form}>
                <TextField name="name" variant="outlined" label="Име" fullWidth required />
                <TextField className={classes.textfield} name="number" variant="outlined" label="Тел. Број" fullWidth required />
                <TextField className={classes.textfield} name="adress" variant="outlined" label="Адреса" fullWidth required />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Порачај</Button>
                <FormHelperText>Откако ќе порачате нашиот тим ќе ве исконтактира во најбрз можен рок. Ви благодариме!</FormHelperText>
            </form>
        </Container>
    )
}

export default Form

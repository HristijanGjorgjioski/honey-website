import React, { useContext, useState } from 'react';
import { Typography, TextField, Button, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import useStyles from './styles';
import { MainContext } from '../../../../context/context';

const Form = () => {
    const classes = useStyles();
    const [contact, setContact] = useState({ name: '', number: '', email: '', message: '' });
    const { submitContact } = useContext(MainContext);
    const history = useHistory();

    const onFormSubmit = async (e) => {
        e.preventDefault();
        submitContact(contact);
        history.push('/');
        alert("Пораката е испратена. Ви благодариме!")
    }

    return (
        <Container className={classes.container}>
            <Typography className={classes.title} variant="h3">Контактирајте не'</Typography>
            <form autoComplete="off" className={classes.form} onSubmit={onFormSubmit}>
                <TextField name="name" variant="outlined" label="Име" fullWidth onChange={(e) => setContact({ ...contact, name: e.target.value })} />
                <TextField className={classes.textfield} name="number" variant="outlined" label="Тел. Број" fullWidth onChange={(e) => setContact({ ...contact, number: e.target.value })} />
                <TextField className={classes.textfield} name="email" variant="outlined" label="Е-маил Адреса" fullWidth onChange={(e) => setContact({ ...contact, email: e.target.value })} />
                <TextField className={classes.textfield} name="message" variant="outlined" multiline rows={4} label="Вашата Порака" fullWidth onChange={(e) => setContact({ ...contact, message: e.target.value })} />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Испрати</Button>
            </form>
        </Container>
    );
};

export default Form;

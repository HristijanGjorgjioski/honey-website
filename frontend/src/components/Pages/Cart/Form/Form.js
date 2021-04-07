import React, { useContext, useState } from 'react'
import { TextField, Button, Container, FormHelperText } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import useStyles from './styles';
import { MainContext } from '../../../../context/context';

const Form = () => {
    const classes = useStyles();
    const { totalPrice, cart, submitOrder } = useContext(MainContext);
    const [order, setOrder] = useState({ cart, totalPrice, number: '', adress: '', name: '' });
    const history = useHistory();

    const onFormSubmit = async (e) => {
        e.preventDefault();

        console.log(order);
        submitOrder(order, history);
    }

    return (
        <Container className={classes.container}>
            <form autoComplete="off" className={classes.form} onSubmit={onFormSubmit}>
                <TextField name="name" variant="outlined" label="Име" fullWidth required onChange={(e) => setOrder({ ...order, name: e.target.value })} />
                <TextField className={classes.textfield} name="number" variant="outlined" label="Тел. Број" fullWidth required onChange={(e) => setOrder({ ...order, number: e.target.value })} />
                <TextField className={classes.textfield} name="adress" variant="outlined" label="Адреса" fullWidth required onChange={(e) => setOrder({ ...order, adress: e.target.value })} />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Порачај</Button>
                <FormHelperText>Откако ќе порачате нашиот тим ќе ве исконтактира во најбрз можен рок. Ви благодариме!</FormHelperText>
            </form>
        </Container>
    )
}

export default Form

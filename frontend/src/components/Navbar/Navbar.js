import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, MenuItem, Toolbar, Box, Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Box display='flex' flexGrow={10}>
                    <MenuItem><Typography className={classes.text}><Link className={classes.link} to="/">Почетна</Link></Typography></MenuItem>
                    <MenuItem><Typography className={classes.text}><Link className={classes.link} to="/products">Продукти</Link></Typography></MenuItem>
                    <MenuItem><Typography className={classes.text}><Link className={classes.link} to="/about">За Нас</Link></Typography></MenuItem>
                    <MenuItem><Typography className={classes.text}><Link className={classes.link} to="/contact">Контакт</Link></Typography></MenuItem>
                </Box>
                <MenuItem><Link to="/cart" style={{ textDecoration: 'none' }}><ShoppingCartIcon style={{ color: '#28334AFF' }} />2</Link></MenuItem>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;

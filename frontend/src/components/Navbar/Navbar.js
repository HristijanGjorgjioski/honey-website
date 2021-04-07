import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, MenuItem, Toolbar, Box, Typography } from '@material-ui/core';
import { ShoppingCart, Info, Home, ContactPhone, Store } from '@material-ui/icons';

import { MainContext } from '../../context/context';
import useStyles from './styles';

const Navbar = () => {
    const { cartLength } = useContext(MainContext);
    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Box display='flex' flexGrow={1}>
                    <MenuItem><Typography className={classes.text}><Link className={classes.link} to="/"><Home /></Link></Typography></MenuItem>
                    <MenuItem><Typography className={classes.text}><Link className={classes.link} to="/products"><Store /></Link></Typography></MenuItem>
                    <MenuItem><Typography className={classes.text}><Link className={classes.link} to="/about"><Info /></Link></Typography></MenuItem>
                    <MenuItem><Typography className={classes.text}><Link className={classes.link} to="/contact"><ContactPhone /></Link></Typography></MenuItem>
                </Box>
                <MenuItem><Link to="/cart" style={{ textDecoration: 'none' }}><ShoppingCart style={{ color: '#28334AFF' }} />{cartLength}</Link></MenuItem>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;

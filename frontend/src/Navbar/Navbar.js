import React from 'react';
import { AppBar, MenuItem, Toolbar, Box, Typography } from '@material-ui/core';

import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <Box display='flex' flexGrow={10}>
                    <MenuItem><Typography className={classes.text}>Почетна</Typography></MenuItem>
                    <MenuItem><Typography className={classes.text}>Продукти</Typography></MenuItem>
                    <MenuItem><Typography className={classes.text}>За Нас</Typography></MenuItem>
                    <MenuItem><Typography className={classes.text}>Контакт</Typography></MenuItem>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;

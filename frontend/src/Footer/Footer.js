import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Grid, Typography } from '@material-ui/core';

import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Grid className={classes.gridContainer} container justify="space-between" alignItems="stretch" spacing={1}>
                <Grid className={classes.gridItem} item xs={5} sm={5}>
                    <Typography variant="inherit" className={classes.title}>ИМЕ - ФИРМА</Typography>
                    <Typography variant="caption" className={classes.text}><Link className={classes.link} to="/products">ПРОДУКТИ</Link></Typography>
                    <Typography variant="caption" className={classes.text}><Link className={classes.link} to="/about">ЗА НАС</Link></Typography>
                    <Typography variant="caption" className={classes.text}><Link className={classes.link} to="/contact">КОНТАКТ</Link></Typography>
                </Grid>
                <Grid className={classes.gridItem} item xs={5} sm={5}>
                    <Typography variant="inherit" className={classes.title}>КОНТАКТИРАЈТЕ НE'</Typography>
                    <Typography variant="caption" className={classes.text}>УЛИЦА: </Typography>
                    <Typography variant="caption" className={classes.text}>ТЕЛ. БРОЈ: </Typography>
                    <Typography variant="caption" className={classes.text}>Е-МАИЛ АДРЕСА: </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Footer

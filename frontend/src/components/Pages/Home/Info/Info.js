import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Container, Grid, Typography, Fade, Paper } from '@material-ui/core';

import useStyles from './styles';
import infoData from './infoData';

const Info = () => {
    const classes = useStyles();

    const [show, setShow] = useState(false);
    let whyUsPosition = 2130;

    useEffect(() => {
        function onScroll() {
            let currentPosition = window.pageYOffset; 
            if(window.innerWidth < 599) {
                whyUsPosition = 3900;
            }
            if(currentPosition > whyUsPosition) {
                setShow(true);
            } else {
                setShow(false)
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [window.pageYOffset])

    const infos = infoData.map((item, index) => {
        return (
            <Grid key={index} item className={classes.grid1} xs={12} sm={4}>
                <Typography variant="h4">{item.title}</Typography>
                <Typography>{item.description} <Link to={item.link}>ТУКА</Link></Typography>
            </Grid>
        );
    });

    return (
        <Fade in={show} timeout={{ enter: 2000 }}>
            <Paper elevation={4}>
                <Container className={classes.container}>
                    <Grid container justify="space-between" alignItems="stretch" spacing={1}>
                        {infos}
                        {/* <Grid item className={classes.grid1} xs={12} sm={4}>
                            <Typography variant="h4">Производи</Typography>
                            <Typography>Доколку сакате да ја разгледате нашата интернет продавница кликенте <Link to="/products">ТУКА</Link></Typography>
                        </Grid>
                        <Grid className={classes.grid1} item xs={12} sm={3}>
                            <Typography variant="h4">За Нас</Typography>
                            <Typography>Доколку сакате да дознаете повеќе за нас кликнете <Link to="/about">ТУКА</Link></Typography>
                        </Grid>
                        <Grid className={classes.grid1} item xs={12} sm={4}>
                            <Typography variant="h4">Контакт</Typography>
                            <Typography>Доколку сакате да не' контактирате кликенте <Link to="/contact">ТУКА</Link></Typography>
                        </Grid> */}
                    </Grid>
                </Container>
            </Paper>
        </Fade>        
    )
}

export default Info

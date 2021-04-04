import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react'

import useStyles from './styles';

const Info = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Grid container justify="space-between" alignItems="stretch" spacing={1}>
                <Grid item className={classes.grid1} xs={12} sm={4}>
                    <Typography variant="h4">Производи</Typography>
                    <Typography>Доколку сакате да ја разгледате нашата интернет продавница кликенте ТУКА</Typography>
                </Grid>
                <Grid className={classes.grid1} item xs={12} sm={3}>
                    <Typography variant="h4">За Нас</Typography>
                    <Typography>Доколку сакате да дознаете повеќе за нас кликнете ТУКА</Typography>
                </Grid>
                <Grid className={classes.grid1} item xs={12} sm={4}>
                    <Typography variant="h4">Контакт</Typography>
                    <Typography>Доколку сакате да не' контактирате кликенте ТУКА</Typography>
                </Grid>
            </Grid>
        </Container>        
    )
}

export default Info

import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core'

const Gallery = () => {
    return (
        <Container>
            <Typography variant="h1">Галерија</Typography>
            <Grid container justify="space-between" alignItems="stretch" spacing={0}>
                <Grid item xs={12} sm={3}>
                    <h1>Apla</h1>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <h1>Apla</h1>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <h1>Apla</h1>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Gallery

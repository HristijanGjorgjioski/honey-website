import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Container, Paper, Button, Typography, CardMedia } from '@material-ui/core';

import useStyles from './styles';

const Testimonials = () => {
    const classes = useStyles();

    const items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image: 'https://www.bioid.com/wp-content/uploads/face-database-bioid.jpg'
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image: ''
        }
    ]

    const Item = ({ item }) => {
        return (
            <Paper>
                <CardMedia style={{ width: '200px', height: 'auto' }} component="img" image={item.image} />
                <Typography>{item.name}</Typography>
                <Typography>{item.description}</Typography>
    
                <Button className="CheckButton">
                    Check it out!
                </Button>
            </Paper>
        )
    }

    return (
        <Container className={classes.container}>
            <Carousel>
                {items.map( (item, i) => <Item key={i} item={item} /> )}
            </Carousel>
        </Container>
    )
}

export default Testimonials

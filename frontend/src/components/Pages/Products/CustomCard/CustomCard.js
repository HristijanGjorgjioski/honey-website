import React from 'react'
import { Typography, Button, Card, CardMedia, CardContent, CardActions, CardActionArea } from '@material-ui/core'

const CustomCard = ({ photo, price, title, description, weight }) => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia component="img" image={photo} title="Продукт" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
                    <Typography variant="body1" color="textSecondary" component="p">{description}</Typography>
                    <Typography variant="body1" color="textSecondary" component="p">{price} денари</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">{weight}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">Share</Button>
                <Button size="small" color="primary">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default CustomCard;

import React, { useContext } from 'react'
import { Typography, Button, Card, CardMedia, CardContent, CardActions, CardActionArea } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons';

import { MainContext } from '../../../../context/context';

const CustomCard = ({ photo, price, title, description, weight, _id, quantity }) => {
    const product = { photo, price, title, description, weight, _id, quantity };
    const { addToCart } = useContext(MainContext);

    return (
        <Card>
            <CardActionArea>
                <CardMedia component="img" image={photo} title="Продукт" style={{ height: '220px' }} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
                    <Typography variant="body1" color="textSecondary" component="p">{description}</Typography>
                    <Typography variant="body1" color="textSecondary" component="p">{price} денари</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">{weight}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" onClick={() => addToCart(product)}><AddShoppingCart color="primary" /></Button>
            </CardActions>
        </Card>
    )
}

export default CustomCard;

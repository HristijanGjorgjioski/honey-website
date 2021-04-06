import React, { useContext } from 'react'
import { Typography, Button, Card, CardMedia, CardContent, CardActions, CardActionArea } from '@material-ui/core'
import { RemoveShoppingCart, AddShoppingCart } from '@material-ui/icons';

import { MainContext } from '../../../../context/context';

const CustomCard = ({ photo, price, title, description, weight, id }) => {
    const item = { photo, price, title, description, weight, id };
    const { addToCart, deleteFromCart } = useContext(MainContext);

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
                <Button size="small" onClick={() => addToCart(item)}><AddShoppingCart color="primary" /></Button>
                <Button size="small" onClick={() => deleteFromCart(id)}><RemoveShoppingCart color="secondary" /></Button>
            </CardActions>
        </Card>
    )
}

export default CustomCard;

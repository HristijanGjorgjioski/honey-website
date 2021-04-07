import React, { useContext } from 'react'
import { Typography, Button, Card, CardMedia, CardContent, CardActions, CardActionArea } from '@material-ui/core'
import { RemoveShoppingCart, AddShoppingCart } from '@material-ui/icons';

import { MainContext } from '../../../../context/context';

const CustomCard = ({ photo, price, title, description, weight, id, quantity }) => {
    const product = { photo, price, title, description, weight, id, quantity };
    const { addToCart, deleteFromCart, cart } = useContext(MainContext);
    console.log(cart);

    const addItem = (item) => {
        const index = cart.findIndex(p => p.id === item.id);

        if(index === -1) {
            cart.push({ ...item, quantity: 1 });
            const updateCart = [...cart];
            // addToCart(updateCart);
            console.log(updateCart.length);
            return updateCart;
        } else {
            cart[index].quantity += 1;
            const updateCart = [...cart];
            // addToCart(updateCart);
            return updateCart;
        }
    }

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
                <Button size="small" onClick={() => addItem(product)}><AddShoppingCart color="primary" /></Button>
                <Button size="small" onClick={() => deleteFromCart(id)}><RemoveShoppingCart color="secondary" /></Button>
            </CardActions>
        </Card>
    )
}

export default CustomCard;

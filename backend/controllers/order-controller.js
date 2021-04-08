import Order from '../models/order-model.js';

export const getOrder = async (req, res) => {
    try {
        const allOrders = Order.find();
        return res.render('all-orders', {
            orders: allOrders
        });
    } catch (error) {
        console.log(error);
    }
}

export const postOrder = async (req, res) => {
    const { cart, name, number, adress, totalPrice } = req.body;

    const newOrder = new Order({ products: cart, name, number, adress, totalPrice });

    try {
        await newOrder.save();
    } catch (error) {
        console.log(error);
    }
};

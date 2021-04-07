import Order from '../models/order-model';

export const postOrder = (req, res) => {
    const { products, name, number, adress } = req.body;

    const newOrder = new Order({ products, name, number, adress });

    try {
        await newOrder.save();
    } catch (error) {
        console.log(error);
    }
};

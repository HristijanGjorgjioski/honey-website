import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    products: { type: Array, default: [] },
    name: String,
    number: String,
    adress: String,
    totalPrice: Number
});

let Order = mongoose.model('Order', orderSchema);

export default Order;

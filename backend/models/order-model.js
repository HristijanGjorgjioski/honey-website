import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    products: [String],
    name: String,
    number: String,
    adress: String
});

let Order = mongoose.model('Order', orderSchema);

export default Order;

import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    title: String,
    price: Number,
    photo: String,
    weight: String,
    description: String
});

let Product = mongoose.model('Product', productSchema);

export default Product;

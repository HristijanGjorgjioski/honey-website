import Product from '../models/product-model.js';

export const getProducts = async (req, res) => {
    try {
        const allProducts = await Product.find();
        return res.render('product/all-products', {
            products: allProducts
        })
    } catch (error) {
        console.log(error);
    }
};

export const postProducts = async (req, res) => {
    const { title, price, weight, description, photo } = req.body;

    const newProduct = new Product({ title, price, weight, description, photo });

    try {
        await newProduct.save();
        res.redirect('/all-products');
    } catch (error) {
        console.log(error);
    }
};

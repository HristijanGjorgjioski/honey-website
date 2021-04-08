import Product from '../models/product-model.js';

export const getProductsFrontend = async (req, res) => {
    const allProducts = await Product.find();
    return res.status(200).json({ allProducts });
}

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

export const deleteProduct = async (req, res) => {
    const { _id } = req.params;

    await Product.deleteOne({ _id });
    res.redirect('/all-products');
};

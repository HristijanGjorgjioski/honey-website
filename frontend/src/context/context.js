import React, { createContext, useState } from 'react';

import * as api from '../api/api';

const inititalState = [];

export const MainContext = createContext(inititalState);

export const Provider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);

    const addToCart = (item) => {
        const index = cart.findIndex(p => p._id === item._id);

        if(index === -1) {
            cart.push({ ...item, quantity: 1 });
            const updateCart = [...cart];
            setCart(updateCart);
            return cart;
        } else {
            cart[index].quantity += 1;
            const updateCart = [...cart];
            setCart(updateCart);
            return cart;
        };
    };

    const deleteFromCart = (_id) => {
        const index = cart.findIndex(p => p._id === _id);

        cart[index].quantity -= 1;
        const filteredCart = cart.filter((p) => p.quantity !== 0);
        const updateCart = [...filteredCart];
        setCart(updateCart);
        return cart;
    };

    const submitOrder = async (order) => {
        await api.submitOrder(order);
    };

    const submitContact = async (contact) => {
        await api.submitContact(contact);
    };

    const getProducts = async () => {
        const { data } = await api.getProducts();
        setProducts(data);
    };

    const cartLength = cart.reduce((acc, curr) => acc + curr.quantity, 0);

    const totalPrice = cart.reduce((acc, curr) => acc + curr.price*curr.quantity, 0);

    return (
        <MainContext.Provider value={{
            addToCart,
            deleteFromCart,
            cartLength,
            cart,
            setCart,
            submitOrder,
            getProducts,
            products,
            totalPrice,
            submitContact,
        }}>
            {children}
        </MainContext.Provider>
    );
};

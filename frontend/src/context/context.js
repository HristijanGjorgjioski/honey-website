import React, { createContext, useReducer } from 'react';

import contextReducer from './contextReducer';

const inititalState = [];

export const MainContext = createContext(inititalState);

export const Provider = ({ children }) => {
    const [cart, dispatch] = useReducer(contextReducer, inititalState);

    const addToCart = (product) => dispatch({ type: 'ADD_TO_CART', data: product });
    const deleteFromCart = (id) => dispatch({ type: 'DELETE_FROM_CART', data: id });

    const cartLength = cart.length;

    return (
        <MainContext.Provider value={{
            addToCart,
            deleteFromCart,
            cartLength
        }}>
            {children}
        </MainContext.Provider>
    );
};

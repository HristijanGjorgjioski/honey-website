const contextReducer = (state, action) => {
    let itemsInCart;

    switch (action.type) {
        case 'ADD_TO_CART':
            itemsInCart = [action.data, ...state];
            return itemsInCart;
        case 'DELETE_FROM_CART': 
            itemsInCart = state.filter((item) => item.id !== action.data);
            return itemsInCart;
        default:
            return state;
    };
};

export default contextReducer;

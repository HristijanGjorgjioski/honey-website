import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });


export const getProducts = () => API.get('/get-products');

export const submitOrder = (order) => API.post('/order', order);

export const submitContact = (contact) => API.post('/contact', contact);

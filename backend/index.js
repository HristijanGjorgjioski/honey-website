import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import orderRoutes from './routes/order-routes.js';
import productRoutes from './routes/product-router.js';
import contactRoutes from './routes/contact-router.js';

const CONNECTION_URL = process.env.CONNECTION_URL || 'mongodb+srv://honey-website:12345@cluster0.u2uu1.mongodb.net/toni-website?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use(orderRoutes);
app.use(productRoutes);
app.use(contactRoutes);

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
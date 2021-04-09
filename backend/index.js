import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import session from 'express-session';
import { default as connectMongoDBSession } from 'connect-mongodb-session';
import cors from 'cors';

const MongoDBStore = connectMongoDBSession(session);

import orderRoutes from './routes/order-routes.js';
import productRoutes from './routes/product-router.js';
import contactRoutes from './routes/contact-router.js';
import adminRoutes from './routes/admin-router.js';
import Admin from './models/admin-model.js';

const CONNECTION_URL = process.env.CONNECTION_URL || 'mongodb+srv://honey-website:12345@cluster0.u2uu1.mongodb.net/toni-website?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

const app = express();
const store = new MongoDBStore({
  uri: CONNECTION_URL,
  collection: 'sessions'
});

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use(
  session({
    secret: 'secret123',
    resave: false,
    saveUninitialized: false,
    store,
  })
);

app.use((req, res, next) => {
  if(!req.session.admin) {
    return next();
  }
  Admin.findById(req.session.admin._id)
    .then(admin => {
      if(!admin) {
        return next();
      }
      req.admin = admin;
      next();
    })
    .catch(err => {
      console.log(err);
    })
})

app.use(orderRoutes);
app.use(productRoutes);
app.use(contactRoutes);
app.use(adminRoutes);

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
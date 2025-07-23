const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');

const app = express();

app.use(cors({
    origin: true,
    credentials: true
}));

app.options('*', cors());

app.use(bodyParser.json());

app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use('/api', orderRoutes);
app.use('/api', subscriptionRoutes);

module.exports = app;

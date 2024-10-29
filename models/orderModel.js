const mongoose = require('mongoose');

// User Schema for MongoDB
const OrderSchema = mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    items: Array(any),
    status: {
        type: String
    }
});

const Order = mongoose.model('Order', OrderSchema); // Create a model from the schema
module.exports = Order;

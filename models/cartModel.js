const mongoose = require('mongoose');

// User Schema for MongoDB
const CartSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    productsId: Array(string)
});

const Cart = mongoose.model('Cart', CartSchema); // Create a model from the schema
module.exports = Cart;

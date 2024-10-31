const Order = require('../models/orderModel');

// Create a new order
exports.createOrder = async (req, res) => {
    const { items, orderAmount } = req.body;
    const userId = req.user.id;

    try {
        const order = new Order({ userId, items, orderAmount });
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get orders for a user
exports.getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.user.id });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

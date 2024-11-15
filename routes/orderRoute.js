const express = require('express');
const router = express.Router();
const passport = require('passport');
const orderController = require('../controllers/orderController');

router.post('/', passport.authenticate('jwt', { session: false }), orderController.createOrder);
router.get('/', passport.authenticate('jwt', { session: false }), orderController.getUserOrders);
router.put('/update-status', passport.authenticate('jwt', { session: false }), orderController.updateOrderStatus);
router.get('/admin-orders', passport.authenticate('jwt', { session: false }), orderController.getAdminOrders);

module.exports = router;

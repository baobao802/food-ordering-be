import express from 'express';
import OrderModel from '../models/order.model.js';
import UserModel from '../models/user.model.js';
import FruitModel from '../models/fruit.model.js';
import OrderController from '../controllers/order.controller.js';
import {
    isAdmin,
    isAuth,
    isSellerOrAdmin,
} from '../utils/utils.js';

const router = express.Router();

router.get('/', isAuth, isSellerOrAdmin, async (req, res) => {
    const seller = req.query.seller || '';
    const sellerFilter = seller ? { seller } : {};

    const orders = await Order.find({ ...sellerFilter }).populate(
        'user',
        'name'
    );
    res.send(orders);
});

router.get('/summary', isAuth, isAdmin, async (req, res) => {
    const orders = await OrderModel.aggregate([
        {
            $group: {
                _id: null,
                numOrders: { $sum: 1 },
                totalSales: { $sum: '$totalPrice' },
            },
        },
    ]);
    const users = await UserModel.aggregate([
        {
            $group: {
                _id: null,
                numUsers: { $sum: 1 },
            },
        },
    ]);
    const dailyOrders = await OrderModel.aggregate([
        {
            $group: {
                _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
                orders: { $sum: 1 },
                sales: { $sum: '$totalPrice' },
            },
        },
        { $sort: { _id: 1 } },
    ]);
    const fruitCategories = await FruitModel.aggregate([
        {
            $group: {
                _id: '$category',
                count: { $sum: 1 },
            },
        },
    ]);
    res.send({ users, orders, dailyOrders, fruitCategories });
});

router.get('/mine', isAuth, async (req, res) => {
    const orders = await OrderModel.find({ user: req.user._id });
    res.send(orders);
});

router.post('/', isAuth, async (req, res) => {
    if (req.body.orderItems.length === 0) {
        res.status(400).send({ message: 'Cart is empty' });
    } else {
        const order = new OrderModel({
            seller: req.body.orderItems[0].seller,
            orderItems: req.body.orderItems,
            shippingAddress: req.body.shippingAddress,
            paymentMethod: req.body.paymentMethod,
            itemsPrice: req.body.itemsPrice,
            shippingPrice: req.body.shippingPrice,
            taxPrice: req.body.taxPrice,
            totalPrice: req.body.totalPrice,
            user: req.user._id,
        });
        const createdOrder = await order.save();
        res.status(201).send({ message: 'New Order Created', order: createdOrder });
    }
});

router.get('/:id', isAuth, async (req, res) => {
    const order = await OrderModel.findById(req.params.id);
    if (order) {
        res.send(order);
    } else {
        res.status(404).send({ message: 'Order Not Found' });
    }
});

orderRouter.put('/:id/pay', isAuth, async (req, res) => {
    const order = await OrderModel.findById(req.params.id).populate(
        'user',
        'email name'
    );
    if (order) {
        order.isPaid = true;
        order.paidAt = Date.now();
        order.paymentResult = {
            id: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            email_address: req.body.email_address,
        };
        const updatedOrder = await order.save();
        try {
            mailgun()
                .messages()
                .send(
                    {
                        from: 'Amazona <amazona@mg.yourdomain.com>',
                        to: `${order.user.name} <${order.user.email}>`,
                        subject: `New order ${order._id}`,
                        html: payOrderEmailTemplate(order),
                    },
                    (error, body) => {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log(body);
                        }
                    }
                );
        } catch (err) {
            console.log(err);
        }

        res.send({ message: 'Order Paid', order: updatedOrder });
    } else {
        res.status(404).send({ message: 'Order Not Found' });
    }
});

orderRouter.delete('/:id', isAuth, isAdmin, async (req, res) => {
    const order = await OrderModel.findById(req.params.id);
    if (order) {
        const deleteOrder = await order.remove();
        res.send({ message: 'Order Deleted', order: deleteOrder });
    } else {
        res.status(404).send({ message: 'Order Not Found' });
    }
});

orderRouter.put('/:id/deliver', isAuth, isAdmin, async (req, res) => {
    const order = await OrderModel.findById(req.params.id);
    if (order) {
        order.isDelivered = true;
        order.deliveredAt = Date.now();

        const updatedOrder = await order.save();
        res.send({ message: 'Order Delivered', order: updatedOrder });
    } else {
        res.status(404).send({ message: 'Order Not Found' });
    }
});



export default router;
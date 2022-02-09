import express from 'express';
import OrderModel from '../models/order.model.js';
import UserModel from '../models/user.model.js';
import FruitModel from '../models/fruits.model.js';
import {
    isAdmin,
    isAuth,
    isSellerOrAdmin,
} from '../middleware/auth.middleware.js';

import { payOrderEmailTemplate } from '../utils/utils.js';

import nodemailer from 'nodemailer';

let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'bkhunterpro@gmail.com',
        pass: 'bkhunterpro!@#123'
    }
});

const router = express.Router();

router.get('/', isAuth, isSellerOrAdmin, async (req, res) => {
    const pageSize = 3;
    const page = Number(req.query.pageNumber) || 1;
    const count = await OrderModel.count();
    const orders = await OrderModel.find({}).sort({ _id: -1 }).skip(pageSize * (page - 1)).limit(pageSize);
    res.send({ orders, page, pages: Math.ceil(count / pageSize) });
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

// order history of user
router.get('/mine', isAuth, async (req, res) => {
    const pageSize = 3;
    const page = Number(req.query.pageNumber) || 1;
    const count = await OrderModel.count();
    const orders = await OrderModel.find({ user: req.user._id })
                                .sort({ _id: -1 })
                                .skip(pageSize * (page - 1))
                                .limit(pageSize);;
    res.send({ orders, page, pages: Math.ceil(count / pageSize) });
});

router.post('/', isAuth, async (req, res) => {
    if (req.body.orderItems.length === 0) {
        res.status(400).send({ message: 'Cart is empty' });
    } else {
        console.log(req.body);
        const order = new OrderModel({
            orderItems: req.body.orderItems,
            shippingAddress: req.body.shippingAddress,
            phone: req.body.phone,
            paymentMethod: req.body.paymentMethod,
            itemsPrice: req.body.itemsPrice,
            shippingPrice: req.body.shippingPrice,
            totalPrice: req.body.totalPrice,
            user: req.user._id,
        });
        const createdOrder = await order.save();
        const orderItems = req.body.orderItems;
        orderItems.forEach(async orderItem => {
            const fruit = await FruitModel.findById(orderItem.fruit);
            const countInStock = Number(fruit.countInStock);
            const newCountInStock = countInStock - orderItem.qty;
            await FruitModel.updateOne({_id: fruit._id}, {countInStock: newCountInStock});
        });
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

router.put('/:id/pay', isAuth, async (req, res) => {
    const order = await OrderModel.findById(req.params.id).populate('user', 'email name');
    if (order) {
        if (!order.isCanceled) {
            order.isPaid = true;
            order.paidAt = Date.now();
            order.paymentResult = {
                id: req.body.id,
                status: req.body.status,
                update_time: req.body.update_time,
                email_address: req.body.email_address,
              };
            order.user = req.user;
            const updatedOrder = await order.save();
            try {
                let mailDetails = {
                    from: 'bkhunterpro@gmail.com',
                    to: `${order.user.email}`,
                    subject: `Đơn đặt hàng ${order._id}`,
                    html: payOrderEmailTemplate(order),
                };
                mailTransporter.sendMail(mailDetails, function(err, data) {
                    if(err) {
                        console.log('Error Occurs');
                    } else {
                        console.log('Email sent successfully\n' + data);
                    }
                });
            } catch (err) {
                console.log(err);
            }

            res.send({ message: 'Order Paid', order: updatedOrder });
        } else {
            res.send({ message: 'Order canceled' });
        }
    } else {
        res.status(404).send({ message: 'Order Not Found' });
    }
});

router.put('/:id/cancel', isAuth, async (req, res) => {
    const order = await OrderModel.findById(req.params.id);
    if (order) {
        if (!order.isPaid) {
            order.canceledAt = Date.now();
            order.isCanceled = true;
            const updatedOrder = await order.save();
            res.send({ message: 'Order Canceled', order: updatedOrder });
        } else {
            res.status(404).send({ message: 'Cannot cancel because order already paid' });
        }
    } else {
        res.status(404).send({ message: 'Order Not Found' });
    }
});

router.put('/:id/deliver', isAuth, isSellerOrAdmin, async (req, res) => {
    const order = await OrderModel.findById(req.params.id);
    if (order) {
        if (!order.isCanceled) {
            order.isDelivered = true;
            order.deliveredAt = Date.now();

            const updatedOrder = await order.save();
            res.send({ message: 'Order Delivered', order: updatedOrder });
        } else {
            res.send({ message: 'Can not deliver cause order canceled'});
        }
    } else {
        res.status(404).send({ message: 'Order Not Found' });
    }
});



export default router;
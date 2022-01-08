import express from 'express';
import fruitRouter from './fruit.routes';
import userRouter from './user.routes';
import orderRouter from './order.routes';

const router = express.Router();

router.use('/fruits', fruitRouter);
router.use('/users', userRouter);
router.use('/orders', orderRouter);

export default router;

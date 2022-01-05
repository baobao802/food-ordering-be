import express from "express";
import fruitRouter from './fruit.routes.js';
import userRouter from './user.routes.js';

const router = express.Router();

router.use('/fruits', fruitRouter);
router.use('/users', userRouter);

export default router;
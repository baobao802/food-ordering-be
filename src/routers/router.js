import express from 'express';
import fruitRouter from './fruit.routes';
import userRouter from './user.routes';
import fileRouter from './file.routes';

const router = express.Router();

router.use('/fruits', fruitRouter);
router.use('/users', userRouter);
router.use('/files', fileRouter);

export default router;

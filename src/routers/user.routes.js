import express from 'express';
import UserController from '../controllers/user.controller.js';
import { isAuth, isSellerOrAdmin, isAdmin } from '../middleware/auth.middleware.js'
const router = express.Router();

// chua lay duoc top
router.get('/top-sellers', UserController.getTopSeller);

router.post('/signin', UserController.signin);

router.post('/register', UserController.register);

router.get('/:id', UserController.getUserById);

// chua test
router.put('/profile', isAuth, UserController.updateProfileUser);

router.get('/', isAuth, isAdmin, UserController.getAllUser);

router.delete('/:id', isAuth, isAdmin, UserController.deleteUser);

router.put('/:id', isAuth, isAdmin, UserController.updateUser);

export default router;
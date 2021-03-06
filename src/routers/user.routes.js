import express from 'express';
import UserController from '../controllers/user.controller.js';
import { isAuth, isAdmin } from '../middleware/auth.middleware.js';
import uploadImage from '../middleware/upload.middleware';

const router = express.Router();


// can remove project
router.get('/top-sellers', UserController.getTopSeller);

router.post('/signin', UserController.signin);

router.post('/register', UserController.register);

router.get('/:id', UserController.getUserById);

router.put('/profile', isAuth, uploadImage, UserController.updateProfileUser);

router.get('/', isAuth, isAdmin, UserController.getAllUser);

router.delete('/:id', isAuth, isAdmin, UserController.deleteUser);

router.put('/:id', isAuth, isAdmin, uploadImage, UserController.updateUser);

export default router;
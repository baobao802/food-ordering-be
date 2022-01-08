import express from 'express';
import FruitController from '../controllers/fruit.controller.js';
import FruitModel from '../models/fruits.model.js';
import {
  isAuth,
  isAdmin,
} from '../middleware/auth.middleware.js';

import uploadImage from '../middleware/upload.middleware';
const router = express.Router();

router.get('/', FruitController.getFruits);

router.get('/categories', FruitController.getAllCategory);

router.get('/:id', FruitController.getFruitById);

router.post('/', isAuth, isAdmin, uploadImage, FruitController.insertFruit);

router.put('/:id', isAuth, isAdmin, uploadImage, FruitController.updateFruit);

router.delete('/:id', isAuth, isAdmin, FruitController.deleteFruit);

router.post('/:id/reviews', isAuth, async (req, res) => {
  const fruitId = req.params.id;
  const fruit = await FruitModel.findById(fruitId);
  if (fruit) {
    if (fruit.reviews.find((review) => review.name === req.user.name)) {
      return res
        .status(400)
        .send({ message: 'You already submitted a review' });
    }
    const review = {
      name: req.user.name,
      rating: Number(req.body.rating),
      comment: req.body.comment,
    };
    fruit.reviews.push(review);
    fruit.numReviews = fruit.reviews.length;
    fruit.rating = fruit.reviews.reduce((a, c) => c.rating + a, 0) /
                   fruit.reviews.length;
    const updatedFruit = await fruit.save();
    res.status(201).send({
      message: 'Review Created',
      review: updatedFruit.reviews[updatedFruit.reviews.length - 1],
    });
  } else {
    res.status(404).send({ message: 'Fruit Not Found' });
  }
});

export default router;

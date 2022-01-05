import express from 'express';
import FruitController from '../controllers/fruit.controller.js';
import { isAuth, isSellerOrAdmin, isAdmin } from '../middleware/auth.middleware.js'
const router = express.Router();

router.get("/", FruitController.getAllFruits);

router.get("/categories", FruitController.getAllCategory);

// miss populate
router.get("/:id", FruitController.getFruitById);

router.post("/", isAuth, isSellerOrAdmin, FruitController.insertFruit);

router.put('/:id', isAuth, isSellerOrAdmin, FruitController.updateFruit);

router.delete('/:id', isAuth, isAdmin, FruitController.deleteFruit);

router.post('/:id/reviews', isAuth, async (req, res) => {
      const fruitId = req.params.id;
      const fruit = await Fruit.findById(fruitId);
      if (fruit) {
        if (fruit.reviews.find((review) => review.name === req.user.name)) {
          return res.status(400).send({ message: 'You already submitted a review' });
        }
        const review = {
          name: req.user.name,
          rating: Number(req.body.rating),
          comment: req.body.comment,
        };
        product.reviews.push(review);
        product.numReviews = product.reviews.length;
        product.rating =
          product.reviews.reduce((a, c) => c.rating + a, 0) /
          product.reviews.length;
        const updatedProduct = await product.save();
        res.status(201).send({
          message: 'Review Created',
          review: updatedProduct.reviews[updatedProduct.reviews.length - 1],
        });
      } else {
        res.status(404).send({ message: 'Product Not Found' });
      }
});

export default router;
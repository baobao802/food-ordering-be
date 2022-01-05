import mongoose from 'mongoose';
import ReviewModel from './review.model.js';

const ReviewSchema = mongoose.model('reviews').schema;
const FruitSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    reviews: [ReviewSchema],
  },
  {
    timestamps: true,
  }
);
const FruitModel = mongoose.model('fruits', FruitSchema);

export default FruitModel;
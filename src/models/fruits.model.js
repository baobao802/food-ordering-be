import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const FruitSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: false },
    numReviews: { type: Number, required: false },
    reviews: [ReviewSchema],
  },
  {
    timestamps: true,
  }
);
const FruitModel = mongoose.model('fruits', FruitSchema);

export default FruitModel;
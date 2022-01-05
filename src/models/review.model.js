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

const ReviewModel = mongoose.model('reviews', ReviewSchema);

export default ReviewModel;
import FruitModel from "../models/fruits.model.js";

const FruitService = {};

FruitService.getAllFruits = async () => {
    return await FruitModel.find({});
}

FruitService.getAllCategory = async () => {
    return await FruitModel.find().distinct('category');
}

FruitService.getFruitById = async (id) => {
    return await FruitModel.findById(id);
}

FruitService.create = async(fruit) => {
    return await FruitModel.create(fruit);
}


export default FruitService;
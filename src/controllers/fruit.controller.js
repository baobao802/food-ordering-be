import FruitsService from '../services/fruit.service.js';
import FruitModel from '../models/fruits.model.js';
const FruitController = {};

FruitController.getAllFruits = async (req, res) => {
    try {
        const fruits = await FruitsService.getAllFruits();
        res.status(200).json({
            fruits
        });
    } catch (error) {
        res.status(400);
    }
};

FruitController.getAllCategory = async (req, res) => {
    const categories = await FruitsService.getAllCategory();
    res.status(200).json(categories);
}

FruitController.getFruitById = async (req, res) => {
    try {
        const fruit = await FruitsService.getFruitById(req.params.id);
        res.status(200).json(fruit);
    } catch (error) {
        res.status(404).send({message: 'Fruit not found'});
    }
}

FruitController.insertFruit = async (req, res) => {
    const fruit = {
        name: req.body.name,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/512px-Red_Apple.jpg',
        price: req.body.price,
        category: req.body.category,
        brand: req.body.brand,
        countInStock: req.body.countInStock,
        rating: 0,
        numReviews: 0,
        description: req.body.description,
        review: '',
    };
    const createdFruit = await FruitsService.create(fruit);
    res.send({ message: 'Fruit Created', fruit: createdFruit });
};

FruitController.updateFruit = async (req, res) => {
    const fruitId = req.params.id;
    const fruit = await FruitModel.findById(fruitId);
    if (fruit) {
        fruit.name = req.body.name;
        fruit.price = req.body.price;
        fruit.image = req.body.image;
        fruit.category = req.body.category;
        fruit.brand = req.body.brand;
        fruit.countInStock = req.body.countInStock;
        fruit.description = req.body.description;
        const updatedfruit = await fruit.save();
        res.send({ message: 'Fruit Updated', fruit: updatedfruit });
    } else {
      res.status(404).send({ message: 'Fruit Not Found' });
    }
};

FruitController.deleteFruit = async (req, res) => {
    const fruit = await FruitModel.findById(req.params.id);
    if (fruit) {
      const deleteFruit = await fruit.remove();
      res.send({ message: 'Fruit Deleted', deleteFruit: deleteFruit });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
};

export default FruitController;
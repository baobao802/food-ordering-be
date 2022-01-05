import mongoose from 'mongoose';
import FruitModel from '../models/fruits.model.js';
import UserModel from '../models/user.model.js';
import data from './prepareData.js';


const connectDatabase = async () => {
    try {
        await mongoose.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`, { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });  
        
        console.log("Connected to the database")

        await FruitModel.deleteMany();
        await FruitModel.insertMany(data.fruits);
        await UserModel.deleteMany();
        await UserModel.insertMany(data.users);
    } catch (error) {
        console.log(`Could not connect to the database with error : ${error}`);
        process.exit(1);
    }
}
export default connectDatabase;

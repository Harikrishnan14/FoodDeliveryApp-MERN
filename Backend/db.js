const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/QuickBite';

const connectToDB = () => {
    mongoose.connect(mongoURI);

    const db = mongoose.connection;

    db.on('error', (error) => {
        console.error('MongoDB connection error:', error);
    });

    db.once('open', async () => {
        console.log('Connected to MongoDB');

        const fetched_data = mongoose.connection.db.collection("food_items");
        const data = await fetched_data.find({}).toArray();

        const foodCategory = mongoose.connection.db.collection("food_category");
        const category_data = await foodCategory.find({}).toArray();

        global.food_items = data;
        global.food_category = category_data;

        // console.log(global.food_items);
        // console.log(global.food_category);
    });
};

module.exports = connectToDB;

const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/QuickBite';

const connectToDB = () => {
    mongoose.connect(mongoURI);

    const db = mongoose.connection;

    db.on('error', (error) => {
        console.error('MongoDB connection error:', error);
    });

    db.once('open', () => {
        console.log('Connected to MongoDB');
    });
};

module.exports = connectToDB;

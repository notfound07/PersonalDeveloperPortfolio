const mongoose = require('mongoose');

const URL = process.env.URL;

const connectDB = async () => {
    try {
        await mongoose.connect(URL);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database', error); 
    }

};

module.exports = connectDB;
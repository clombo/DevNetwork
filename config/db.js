const mongoose = require('mongoose');
const config = require('config');

const connectString = config.get('mongoURI');
const db = config.get('database');

const connectDB = async () => {
    try {
        await mongoose.connect(
            connectString+db,
            {useNewUrlParser: true});
        console.log('database connected');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;
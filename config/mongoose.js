const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://bytes-backend-challenge:l3EmyPcEixzaV4P6@bytes-challenge.0kukf.mongodb.net/bytes-challenge');
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    }
};

module.exports = connectDB;
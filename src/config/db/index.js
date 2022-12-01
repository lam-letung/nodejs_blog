// Using Node.js `require()`
const mongoose = require('mongoose');

// // Using ES6 imports
// import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/f8_education_dev', {
            // useNewUrlParser: true, // <-- no longer necessary
            // useUnifiedTopology: true // <-- no longer necessary
        });
        console.log('connect succed');
    } catch (error) {
        console.log('connect fail');
    }
}

module.exports = { connect };

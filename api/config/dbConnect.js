require('dotenv').config();
const mongoose  = require("mongoose");

const dbConnect = async function() {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGODB_ATLAS_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connect successfully');
    } catch (error) {
        console.log(error);
        console.log('Database connection error');
    }
}

module.exports = dbConnect;
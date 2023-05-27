const express = require('express');
const dotenv = require('dotenv');
const dbConnect = require('./config/dbConnect');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const User = require('./models/userModel');
const Message = require('./models/messageModel');
const app = express();
const port = 4000;

dotenv.config();
dbConnect();

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
}));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/register', (req, res) => {
    const {username,password} = req.body;
    try {
        jwt.sign({userId:createdUser._id,username}, process.env.JWT_SECRET, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token, {sameSite:'none', secure:true}).status(201).json({
              id: createdUser._id,
            });
        });
    } catch (error) {
        if (err) throw err;
        res.status(500).json('error');
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// q39x00FfW894RUHh
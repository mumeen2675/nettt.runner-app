const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/connectDb');


const app = express();

dotenv.config({path: ".env"});

 // body parser
app.use(express.json());

connectDB();

const PORT = 8000;

const server = app.listen(PORT,
    console.log(`Server running on ${PORT}`)
)
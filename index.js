const dotenv = require('dotenv'); // Dev stage environment variables
const express = require('express');
const cors = require('cors'); // cross-origin requirement
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const APP_URL = process.env.APP_URL || 'http://localhost:3000'
const request = require('request');
const helmet = require('helmet'); // Extra security
const morgan = require("morgan"); // Debugging Tool
const middlewares = require('./middlewares');

// cors setup
const corsOptions = {
    origin: APP_URL,
    optionsSuccessStatus: 200
};

const server = express();

// init sever
server.use(
    express.json(),
    cors(corsOptions),
    helmet(),
    morgan('common')
);

// Sanity Check
server.get('/', (req, res) => res.status(200).json("Server running"));


// Simple Error Handling
server.use(middlewares.notFound); // 404 Handler
server.use(middlewares.errHandler); // Specified Error

// Routes


server.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`);
});

module.exports = server;
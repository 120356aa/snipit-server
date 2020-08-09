const dotenv = require('dotenv'); // Dev stage environment variables
const express = require('express');
const request = require('request');
const server = express();
const logger = require('morgan'); // For debugging
const helmet = require('helmet'); // Extra security
const morgran = require("morgan"); // Debugging Tool
const cors = require('cors'); // cross-origin requirement

const middlewares = require('./middlewares');

// init sever
server.use(
    express.json(),
    helmet(),
    morgran('common'),
    logger('dev')
);

// Sanity Check
server.get('/', (req, res) => {
    res.status(200).json("Server running");
});

// Cors Setup
server.use(cors({
    origin: 'http://localhost:3000'
}));

// Simple Error Handling
server.use(middlewares.notFound); // 404 Handler
server.use(middlewares.errHandler); // Specified Error

module.exports = server;
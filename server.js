const dotenv = require('dotenv'); // Dev stage environment variables
const express = require('express');
const request = require('request');
const server = express();
const logger = require('morgan'); // For debugging
const helmet = require('helmet'); // Extra security
const cors = require('cors'); // cross-origin requirement

// init sever
server.use(
    express.json(),
    helmet(),
    logger('dev'),
    cors()
);

// Sanity Check
server.get('/', (req, res) => {
    res.status(200).json("Server running");
});

module.exports = server;
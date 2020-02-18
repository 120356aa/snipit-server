const dotenv = require('dotenv');
const express = require('express');
const request = require('request');
const server = express();
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

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
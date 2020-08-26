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

const usersRouter = require('./api/users/usersRouter');
const snippetsRouter = require('./api/snippets/snippetsRouter');
const technologiesRouter = require('./api/technologies/technologiesRouter');
const accountTypeRouter = require('./api/accountType/accountTypeRouter');
const securityClearanceRouter = require('./api/securityClearance/securityClearanceRouter');
const authorizationRouter = require('./api/authorization/authorizationRouter');

// cors setup
const corsOptions = {
    origin: APP_URL,
    optionsSuccessStatus: 200
};

const server = express();

// init server
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
server.use('/users', usersRouter);
server.use('/snippets', snippetsRouter);
server.use('/technologies', technologiesRouter);
server.use('/account_type', accountTypeRouter);
server.use('/security_clearance', securityClearanceRouter);
server.use('/authorization', authorizationRouter);

server.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`);
});

module.exports = server;
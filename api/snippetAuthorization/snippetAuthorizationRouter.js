const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { jwtKey } = require("../../auth/authenticate.js");
const db = require("./snippetAuthorizationHelper.js");
const snippetAuthorizationRouter = express.Router();

module.exports = snippetAuthorizationRouter;
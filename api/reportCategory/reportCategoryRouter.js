const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { jwtKey } = require("../../auth/authenticate.js");
const db = require("./accountTypeHelper.js");
const reportCategoryRouter = express.Router();

module.exports = reportCategoryRouter;
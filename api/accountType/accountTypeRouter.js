const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { jwtKey } = require("../../auth/authenticate.js");
const db = require("./accountTypeHelper.js");
const accountTypeRouter = express.Router();

// GET ALL
accountTypeRouter.get("/", async (req, res) => {
  const rows = await db.getAll();
  res.status(200).json(rows);
});

module.exports = accountTypeRouter;
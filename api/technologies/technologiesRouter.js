const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { jwtKey } = require("../../auth/authenticate.js");
const db = require("./technologiesHelper.js");
const technologiesRouter = express.Router();

technologiesRouter.get("/", async (req, res) => {
  const rows = await db.getAll();
  res.status(200).json(rows);

  console.log(res.status);
});

module.exports = technologiesRouter;

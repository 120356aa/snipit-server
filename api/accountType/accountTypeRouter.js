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

// GET BY ID
accountTypeRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  const row = await db.getAccountTypeById(id);
  if (row.length > 0) {
    res.status(200).json(row[0]);
  } else {
    res.status(404).json({ message: "Item does not exist" });
  };
});

module.exports = accountTypeRouter;
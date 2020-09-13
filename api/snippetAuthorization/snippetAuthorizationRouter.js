const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { jwtKey } = require("../../auth/authenticate.js");
const db = require("./snippetAuthorizationHelper.js");
const snippetAuthorizationRouter = express.Router();

// GET ALL
snippetAuthorizationRouter.get("/", async (req, res) => {
  const rows = await db.getAll();
  res.status(200).json(rows);
});

// GET BY ID
snippetAuthorizationRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  const row = await db.getSnippetAuthorizationById(id);
  if (row.length > 0) {
    res.status(200).json(row[0]);
  } else {
    res.status(404).json({ message: "Item Not Found" });
  }
});

module.exports = snippetAuthorizationRouter;
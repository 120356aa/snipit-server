const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { jwtKey } = require("../../auth/authenticate.js");
const db = require("./usersHelper.js");
const usersRouter = express.Router();

// GET ALL
usersRouter.get("/", async(req, res) => {
  try {
    const rows = await db.getAll();
    if(rows.length < 1) {
      res.status(404).json({ err: "No users to show." });
    } else {
      res.status(200).json(rows);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET BY ID
usersRouter.get("/:id", async(req, res) => {
  const { id } = req.params;

  try {
    const rows = await db.getById(id);
    if (rows.length < 1) {
      res.status(404).json({ err: "User does not exist." });
    } else {
      res.status(200).json(rows);
    }
  } catch (err) {
    res.status(500).json(err);
  };
});

module.exports = usersRouter;
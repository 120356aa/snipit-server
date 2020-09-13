const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { jwtKey } = require("../../auth/authenticate.js");
const db = require("./securityClearanceHelper.js");
const securityClearanceRouter = express.Router();

// GET ALL
securityClearanceRouter.get("/", async (req, res) => {
  const rows = await db.getAll();
  res.status(200).json(rows);
});

// GET BY ID
securityClearanceRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  const row = await db.getSecurityClearanceById(id);
  if (row.length > 0) {
    res.status(200).json(row[0]);
  } else {
    res.status(404).json({ message: "Item Not Found" });
  }
});

// ADD TECHNOLOGY
securityClearanceRouter.post("/", async (req, res) => {
  const newSecurityClearance = req.body;

  const dupSecurityClearance = await db.checkForSecurityClearance(newSecurityClearance);
  if (dupSecurityClearance.length > 0) {
    res.status(409).json({ message: "Item Already Exists" });
  } else {
    const ids = await db.addSecurityClearance(newSecurityClearance);
    if (ids) {
      const rows = await db.getAll();
      res.status(201).json(rows);
    } else {
      res.status(500).json({ message: "Unable to add new item" });
    }
  }
});

module.exports = securityClearanceRouter;
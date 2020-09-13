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

  const row = await db.getById(id);
  if (row.length > 0) {
    res.status(200).json(row[0]);
  } else {
    res.status(404).json({ message: "Item does not exist" });
  };
});

// ADD ACCOUNT TYPE
accountTypeRouter.post("/", async (req, res) => {
  const newAccountType = req.body;

  const checkExisting = await db.checkExisting(newAccountType);
  if (checkExisting.length > 0) {
    res.status(409).json({ message: "Item Already Exists" });
  } else {
    const ids = await db.addAccountType(newAccountType);
    if (ids) {
      const rows = await db.getAll();
      res.status(201).json(rows);
    } else {
      res.status(500).json({ message: "Unable to add new item" });
    }
  }
});

// UPDATE ACCOUNT TYPE
accountTypeRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  const checkExisting = await db.checkExisting(changes);
  if (checkExisting.length > 0) {
    res.status(409).json({ message: "Account Type Already Exists" });
  } else {
    const updatedAccountType = await db.updateAccountType(id, changes);
    if (updatedAccountType) {
      const rows = await db.getAll();
      res.status(202).json(rows);
    } else {
      res.status(500).json({ message: "Unable to update item" });
    }
  }
});

// REMOVE ACCOUNT TYPE
accountTypeRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const removeAccountType = await db.removeAccountType(id);
  if (removeAccountType) {
    const rows = await db.getAll();
    res.status(202).json(rows);
  } else {
    res.status(500).json({ message: "Unable to remove item" });
  }
});

module.exports = accountTypeRouter;
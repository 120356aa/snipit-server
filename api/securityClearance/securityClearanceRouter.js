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

  const row = await db.getById(id);
  if (row.length > 0) {
    res.status(200).json(row[0]);
  } else {
    res.status(404).json({ message: "Item Not Found" });
  }
});

// ADD SECURITY CLEARANCE
securityClearanceRouter.post("/", async (req, res) => {
  const newItem = req.body;

  const checkExisting = await db.checkExisting(newItem);
  if (checkExisting.length > 0) {
    res.status(409).json({ message: "Item Already Exists" });
  } else {
    const ids = await db.addSecurityClearance(newItem);
    if (ids) {
      const rows = await db.getAll();
      res.status(201).json(rows);
    } else {
      res.status(500).json({ message: "Unable to add new item" });
    }
  }
});

// UPDATE SECURITY CLEARANCE
securityClearanceRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  const checkExisting = await db.checkExisting(changes);
  if (checkExisting.length > 0) {
    res.status(409).json({ message: "Item Already Exists" });
  } else {
    const updateItem = await db.updateSecurityClearance(id, changes);
    if (updateItem) {
      const rows = await db.getAll();
      res.status(202).json(rows);
    } else {
      res.status(500).json({ message: "Unable to update item" });
    }
  }
});

// REMOVE SECURITY CLEARANCE
securityClearanceRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const removeItem = await db.removeSecurityClearance(id);
  if (removeItem) {
    const rows = await db.getAll();
    res.status(202).json(rows);
  } else {
    res.status(500).json({ message: "Unable to remove item" });
  }
});

module.exports = securityClearanceRouter;
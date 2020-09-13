const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { jwtKey } = require("../../auth/authenticate.js");
const db = require("./technologiesHelper.js");
const technologiesRouter = express.Router();

// GET ALL
technologiesRouter.get("/", async (req, res) => {
  try {
    const rows = await db.getAll();
    if (rows.length < 1) {
      res.status(404).json({ err: "No items to show." });
    } else {
      res.status(200).json(rows);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET BY ID
technologiesRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const rows = await db.getById(id);
    if (rows.length < 1) {
      res.status(404).json({ err: "Item does not exist." });
    } else {
      res.status(200).json(rows);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// ADD TECHNOLOGY
technologiesRouter.post("/", async (req, res) => {
  const newItem = req.body;

  try {
    const checkExisting = await db.checkExisting(newItem);
    if (checkExisting.length > 0) {
      res.status(409).json({ err: "Item already exists." });
    } else {
      const ids = await db.addTechnology(newItem);
      if (ids) {
        const rows = await db.getAll();
        res.status(201).json(rows);
      } else {
        res.status(400).json({ err: "Unable to add item." })
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE TECHNOLOGY
technologiesRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  try {
    const checkExisting = await db.checkExisting(changes);
    if (checkExisting.length > 0) {
      res.status(409).json({ err: "Item already exists" });
    } else {
      const updateItem = await db.updateTechnology(id, changes);
      if (updateItem) {
        const rows = await db.getAll();
        res.status(202).json(rows);
      } else {
        res.status(400).json({ err: "Unable to add item." });
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// REMOVE TECHNOLOGY
technologiesRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const removeItem = await db.removeTechnology(id);
    if (removeItem) { 
      const rows = await db.getAll();
      res.status(202).json(rows);
    } else {
      res.status(400).json({ err: "Unable to remove item." });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = technologiesRouter;

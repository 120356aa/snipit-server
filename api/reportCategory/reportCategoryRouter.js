const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { jwtKey } = require("../../auth/authenticate.js");
const db = require("./reportCategoryHelper.js");
const reportCategoryRouter = express.Router();

// GET ALL
reportCategoryRouter.get("/", async (req, res) => {
  const rows = await db.getAll();
  res.status(200).json(rows);
});

// GET BY ID
reportCategoryRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  const row = await db.getById(id);
  if (row.length > 0) {
    res.status(200).json(row[0]);
  } else {
    res.status(404).json({ message: "Item does not exist" });
  };
});

// ADD REPORT CATEGORY
reportCategoryRouter.post("/", async (req, res) => {
  const newItem = req.body;

  const checkExisting = await db.checkExisting(newItem);
  if (checkExisting.length > 0) {
    res.status(409).json({ message: "Item Already Exists" });
  } else {
    const ids = await db.addReportCategory(newItem);
    if (ids) {
      const rows = await db.getAll();
      res.status(201).json(rows);
    } else {
      res.status(500).json({ message: "Unable to add new item" });
    }
  }
});

// UPDATE REPORT CATEGORY
reportCategoryRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  const checkExisting = await db.checkExisting(changes);
  if (checkExisting.length > 0) {
    res.status(409).json({ message: "Category Already Exists" });
  } else {
    const updateItem = await db.updateReportCategory(id, changes);
    if (updateItem) {
      const rows = await db.getAll();
      res.status(202).json(rows);
    } else {
      res.status(500).json({ message: "Unable to update item" });
    }
  }
});

// REMOVE REPORT CATEGORY
reportCategoryRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const removeItem = await db.removeReportCategory(id);
  if (removeItem) {
    const rows = await db.getAll();
    res.status(202).json(rows);
  } else {
    res.status(500).json({ message: "Unable to remove item" });
  }
});

module.exports = reportCategoryRouter;
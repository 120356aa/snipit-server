const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { jwtKey } = require("../../auth/authenticate.js");
const db = require("./technologiesHelper.js");
const technologiesRouter = express.Router();

// GET ALL
technologiesRouter.get("/", async (req, res) => {
  const rows = await db.getAll();
  res.status(200).json(rows);
});

// GET BY ID
technologiesRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  const row = await db.getTechnologyById(id);
  if (row.length > 0) {
    res.status(200).json(row[0]);
  } else {
    res.status(404).json({ message: "Not Found" });
  }
});

// ADD TECHNOLOGY
technologiesRouter.post("/", async (req, res) => {
  const newTechnology = req.body;

  const dupTechnology = await db.checkForTechnology(newTechnology);
  if (dupTechnology.length > 0) {
    res.status(409).json({ message: "Technology Already Exists" });
  } else {
    const ids = await db.addTechnology(newTechnology);
    if (ids) {
      const rows = await db.getAll();
      res.status(201).json(rows);
    } else {
      res.status(500).json({ message: "An Unknown Error Occurd" });
    }
  }
});

technologiesRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  const checkExisting = await db.checkForTechnology(changes);
  if (checkExisting.length > 0) {
    res.status(409).json({ message: "Technology Already Exists" });
  } else {
    const updatedTechnology = await db.updateTechnology(id, changes);
    if (updatedTechnology) {
      const rows = await db.getAll();
      res.status(202).json(rows);
    } else {
      res.status(500).json({ message: "An Unknown Error Occured" });
    }
  }
});

module.exports = technologiesRouter;

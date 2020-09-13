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

// ADD SNIPPET AUTHORIZATION
snippetAuthorizationRouter.post("/", async (req, res) => {
  const newSnippetAuthorization = req.body;

  const dupSnippetAuthorization = await db.checkForSnippetAuthorization(newSnippetAuthorization);
  if (dupSnippetAuthorization.length > 0) {
    res.status(409).json({ message: "Item Already Exists" });
  } else {
    const ids = await db.addSnippetAuthorization(newSnippetAuthorization);
    if (ids) {
      const rows = await db.getAll();
      res.status(201).json(rows);
    } else {
      res.status(500).json({ message: "Unable to add new item" });
    }
  }
});

// UPDATE SNIPPET AUTHORIZATION
snippetAuthorizationRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  const checkExisting = await db.checkForSnippetAuthorization(changes);
  if (checkExisting.length > 0) {
    res.status(409).json({ message: "Item Already Exists" });
  } else {
    const updatedSnippetAuthorization = await db.updateSnippetAuthorization(id, changes);
    if (updatedSnippetAuthorization) {
      const rows = await db.getAll();
      res.status(202).json(rows);
    } else {
      res.status(500).json({ message: "Unable to update item" });
    }
  }
});

module.exports = snippetAuthorizationRouter;
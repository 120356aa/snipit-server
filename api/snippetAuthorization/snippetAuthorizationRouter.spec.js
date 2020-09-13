const request = require("supertest");
const server = require("../../index.js");
const db = require("../../data/db.js");

describe("Snippet Authorization Route Handlers", () => {
  beforeEach(async () => {
    await db("snippet_authorization").insert({ authorization: "User" });
  });

  afterEach(async () => {
    await db("snippet_authorization").truncate();
  });
});
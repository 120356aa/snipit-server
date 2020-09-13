const request = require("supertest");
const server = require("../../index.js");
const db = require("../../data/db.js");

describe("Technologies Route Handlers", () => {
  beforeEach(async () => {
    await db("security_clearance").insert({ security_level: "Public" });
  });

  afterEach(async () => {
    await db("security_clearance").truncate();
  });
});
const request = require("supertest");
const server = require("../../index.js");
const db = require("../../data/db.js");

describe("Account Type Route Handlers", () => {
  beforeEach(async () => {
    await db("account_type").insert({ type: "Owner" });
  });

  afterEach(async () => {
    await db("account_type").truncate();
  });
});
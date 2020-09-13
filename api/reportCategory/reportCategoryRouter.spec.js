const request = require("supertest");
const server = require("../../index.js");
const db = require("../../data/db.js");

describe("Report Category Route Handlers", () => {
  beforeEach(async () => {
    await db("report_category").insert({ category: "Spam" });
  });

  afterEach(async () => {
    await db("report_category").truncate();
  }); 
});
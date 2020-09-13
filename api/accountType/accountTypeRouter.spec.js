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

  // GET ALL
  describe("GET /", () => {
    it("res status 200", async () => {
      const res = await request(server).get("/account_type");
      expect(res.status).toBe(200);
    });

    it("res with json", async () => {
      const res = await request(server).get("/account_type");
      expect(res.type).toMatch(/json/i);
    });

    it("res returns data", async () => {
      const res = await request(server).get("/account_type");
      expect(res.body).toEqual([{ id: 1, type: "Owner" }]);
    });
  });

  // GET BY ID
  describe("GET /:id", () => {
    it("res status 200", async () => {
      const res = await request(server).get("/account_type/1");
      expect(res.status).toBe(200);
    });

    it("res with json", async () => {
      const res = await request(server).get("/account_type/1");
      expect(res.type).toMatch(/json/i);
    });

    it("res with correct data", async () => {
      const res = await request(server).get("/account_type/1");
      expect(res.body).toEqual({ id: 1, type: "Owner" });
    });
  });
});
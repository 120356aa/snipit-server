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

  // GET ALL
  describe("GET /", () => {
    it("res status 200", async () => {
      const res = await request(server).get("/report_category");
      expect(res.status).toBe(200);
    });

    it("res with json", async () => {
      const res = await request(server).get("/report_category");
      expect(res.type).toMatch(/json/i);
    });

    it("res returns data", async () => {
      const res = await request(server).get("/report_category");
      expect(res.body).toEqual([{ id: 1, category: "Spam" }]);
    });
  });

  // GET BY ID
  describe("GET /:id", () => {
    it("res status 200", async () => {
      const res = await request(server).get("/report_category/1");
      expect(res.status).toBe(200);
    });

    it("res with json", async () => {
      const res = await request(server).get("/report_category/1");
      expect(res.type).toMatch(/json/i);
    });

    it("res with correct data", async () => {
      const res = await request(server).get("/report_category/1");
      expect(res.body).toEqual({ id: 1, category: "Spam" });
    });
  });
});
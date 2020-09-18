const request = require("supertest");
const server = require("../../index.js");
const db = require("../../data/db.js");

let reportCategories = [
  { category: "Spam" },
  { category: "Duplicate" }
];

describe("Report Category Route Handlers", () => {
  beforeEach(async () => {
    await db("report_category").insert(reportCategories);
  });

  afterEach(async () => {
    await db("report_category").truncate();
  });

  // GET ALL
  describe("GET /", () => {
    test("Returns an array of report categories", async () => {
      const res = await request(server).get("/report_category");
      expect(res.status).toBe(200);
      expect(res.type).toMatch(/json/i);
      expect(res.body.length).toBe(2);
    });
  });

  // GET BY ID
  describe("GET /:id", () => {
    test("Returns report category by ID", async () => {
      const res = await request(server).get("/report_category/1");
      expect(res.status).toBe(200);
      expect(res.type).toMatch(/json/i);
      expect(res.body).toEqual([{ id: 1, category: "Spam" }]);
    });
  });

  // ADD REPORT CATEGORY
  describe("POST /", () => {
    test("Adds new report category", async () => {
      const res = await request(server)
        .post("/report_category")
        .send({ category: "Pleb" });
      expect(res.status).toBe(201);
      expect(res.type).toMatch(/json/i);
      expect(res.body.length).toBe(3)
      expect(res.body[2]).toEqual({ id: 3, category: "Pleb" });
    });
  });

  // EDIT REPORT CATEGORY
  describe("PUT /:id", () => {
    test("Updates report category by ID", async () => {
      const res = await request(server)
        .put("/report_category/1")
        .send({ category: "Pleb" });
      expect(res.status).toBe(202);
      expect(res.type).toMatch(/json/i);
      expect(res.body.length).toBe(2);
      expect(res.body[0]).toEqual({ id: 1, category: "Pleb" });
    });
  });

  // REMOVE REPORT CATEGORY
  describe("DELETE /:id", () => {
    test("Delete report category by ID", async () => {
      const res = await request(server).del("/report_category/1");
      expect(res.status).toBe(202);
      expect(res.type).toMatch(/json/i);
      expect(res.body.length).toBe(1);
      expect(res.body[0]).toEqual({ id: 2, category: "Duplicate" });
    });
  });
});
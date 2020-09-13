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

  // ADD REPORT CATEGORY
  describe("POST /:id", () => {
    it("res status 201", async () => {
      const res = await request(server)
        .post("/report_category")
        .send({ category: "Duplicate" });
      expect(res.status).toBe(201);
    });

    it("res with json", async () => {
      const res = await request(server)
        .post("/report_category")
        .send({ category: "Duplicate" });
      expect(res.type).toMatch(/json/i);
    });

    it("res with correct data", async () => {
      const res = await request(server)
        .post("/report_category")
        .send({ category: "Duplicate" });
      expect(res.body[1]).toEqual({ id: 2, category: "Duplicate" });
    });
  });

  // EDIT REPORT CATEGORY
  describe("PUT /:id", () => {
    it("res status 202", async () => {
      const res = await request(server)
        .put("/report_category/1")
        .send({ category: "Pleb" });
      expect(res.status).toBe(202);
    });

    it("res with json", async () => {
      const res = await request(server)
        .put("/report_category/1")
        .send({ category: "Pleb" });
      expect(res.type).toMatch(/json/i);
    });

    it("res with correct data", async () => {
      const res = await request(server)
        .put("/report_category/1")
        .send({ category: "Pleb" });
      expect(res.body[0]).toEqual({ id: 1, category: "Pleb" });
    });
  });

  // REMOVE REPORT CATEGORY
  describe("DELETE /:id", () => {
    it("res status 202", async () => {
      await request(server).post("/report_category").send({ category: "Pleb" });
      const res = await request(server).del("/report_category/1");
      expect(res.status).toBe(202);
    });

    it("res with json", async () => {
      await request(server).post("/report_category").send({ category: "Pleb" });
      const res = await request(server).del("/report_category/1");
      expect(res.type).toMatch(/json/i);
    });

    it("res with correct data", async () => {
      await request(server).post("/report_category").send({ category: "Pleb" });
      const res = await request(server).del("/report_category/1");
      expect(res.body[0]).toEqual({ id: 2, category: "Pleb" });
    });
  });
});
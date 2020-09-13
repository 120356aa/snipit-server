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

  // ADD ACCOUNT TYPE
  describe("POST /:id", () => {
    it("res status 201", async () => {
      const res = await request(server)
        .post("/account_type")
        .send({ type: "Admin" });
      expect(res.status).toBe(201);
    });

    it("res with json", async () => {
      const res = await request(server)
        .post("/account_type")
        .send({ type: "Admin" });
      expect(res.type).toMatch(/json/i);
    });

    it("res with correct data", async () => {
      const res = await request(server)
        .post("/account_type")
        .send({ type: "Admin" });
      expect(res.body[1]).toEqual({ id: 2, type: "Admin" });
    });
  });

  // EDIT ACCOUNT TYPE
  describe("PUT /:id", () => {
    it("res status 202", async () => {
      const res = await request(server)
        .put("/account_type/1")
        .send({ type: "Pleb" });
      expect(res.status).toBe(202);
    });

    it("res with json", async () => {
      const res = await request(server)
        .put("/account_type/1")
        .send({ type: "Pleb" });
      expect(res.type).toMatch(/json/i);
    });

    it("res with correct data", async () => {
      const res = await request(server)
        .put("/account_type/1")
        .send({ type: "Pleb" });
      expect(res.body[0]).toEqual({ id: 1, type: "Pleb" });
    });
  });

  // REMOVE ACCOUNT TYPE
  describe("DELETE /:id", () => {
    it("res status 202", async () => {
      await request(server).post("/account_type").send({ type: "Pleb" });
      const res = await request(server).del("/account_type/1");
      expect(res.status).toBe(202);
    });

    it("res with json", async () => {
      await request(server).post("/account_type").send({ type: "Pleb" });
      const res = await request(server).del("/account_type/1");
      expect(res.type).toMatch(/json/i);
    });

    it("res with correct data", async () => {
      await request(server).post("/account_type").send({ type: "Pleb" });
      const res = await request(server).del("/account_type/1");
      expect(res.body[0]).toEqual({ id: 2, type: "Pleb" });
    });
  });
});
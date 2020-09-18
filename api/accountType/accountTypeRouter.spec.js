const request = require("supertest");
const server = require("../../index.js");
const db = require("../../data/db.js");

let accountTypes = [
  { type: "Free" },
  { type: "Paid" }
];

describe("Account Type Route Handlers", () => {
  beforeEach(async () => {
    await db("account_type").insert(accountTypes);
  });

  afterEach(async () => {
    await db("account_type").truncate();
  });

  // GET ALL
  describe("GET /", () => {
    test("Returns an array of account types", async () => {
      const res = await request(server).get("/account_type");
      expect(res.status).toBe(200);
      expect(res.type).toMatch(/json/i);
      expect(res.body.length).toBe(2);
    });
  });

  // GET BY ID
  describe("GET /:id", () => {
    test("Returns account type by ID", async () => {
      const res = await request(server).get("/account_type/1");
      expect(res.status).toBe(200);
      expect(res.type).toMatch(/json/i);
      expect(res.body).toEqual([{ id: 1, type: "Free" }]);
    });
  });

  // ADD ACCOUNT TYPE
  describe("POST /", () => {
    test("Adds new account type", async () => {
      const res = await request(server)
        .post("/account_type")
        .send({ type: "Pleb" });
      expect(res.status).toBe(201);
      expect(res.type).toMatch(/json/i);
      expect(res.body.length).toBe(3)
      expect(res.body[2]).toEqual({ id: 3, type: "Pleb" });
    });
  });

  // EDIT ACCOUNT TYPE
  describe("PUT /:id", () => {
    test("Updates account type by ID", async () => {
      const res = await request(server)
        .put("/account_type/1")
        .send({ type: "Pleb" });
      expect(res.status).toBe(202);
      expect(res.type).toMatch(/json/i);
      expect(res.body.length).toBe(2);
      expect(res.body[0]).toEqual({ id: 1, type: "Pleb" });
    });
  });

  // REMOVE ACCOUNT TYPE
  describe("DELETE /:id", () => {
    test("Delete account type by ID", async () => {
      const res = await request(server).del("/account_type/1");
      expect(res.status).toBe(202);
      expect(res.type).toMatch(/json/i);
      expect(res.body.length).toBe(1);
      expect(res.body[0]).toEqual({ id: 2, type: "Paid" });
    });
  });
});
const request = require("supertest");
const server = require("../../index.js");
const db = require("../../data/db.js");

let securityLevels = [
  { security_level: "User" },
  { security_level: "Admin" }
];

describe("Security Clearance Route Handlers", () => {
  beforeEach(async () => {
    await db("security_clearance").insert(securityLevels);
  });

  afterEach(async () => {
    await db("security_clearance").truncate();
  });

  // GET ALL
  describe("GET /", () => {
    test("Returns an array of security levels", async () => {
      const res = await request(server).get("/security_clearance");
      expect(res.status).toBe(200);
      expect(res.type).toMatch(/json/i);
      expect(res.body.length).toBe(2);
    });
  });

  // GET BY ID
  describe("GET /:id", () => {
    test("Returns security level by ID", async () => {
      const res = await request(server).get("/security_clearance/1");
      expect(res.status).toBe(200);
      expect(res.type).toMatch(/json/i);
      expect(res.body).toEqual([{ id: 1, security_level: "User" }]);
    });
  });

  // ADD SECURITY LEVEL
  describe("POST /", () => {
    test("Adds new security level", async () => {
      const res = await request(server)
        .post("/security_clearance")
        .send({ security_level: "Pleb" });
      expect(res.status).toBe(201);
      expect(res.type).toMatch(/json/i);
      expect(res.body.length).toBe(3)
      expect(res.body[2]).toEqual({ id: 3, security_level: "Pleb" });
    });
  });

  // EDIT SECURITY LEVEL
  describe("PUT /:id", () => {
    test("Updates security level by ID", async () => {
      const res = await request(server)
        .put("/security_clearance/1")
        .send({ security_level: "Pleb" });
      expect(res.status).toBe(202);
      expect(res.type).toMatch(/json/i);
      expect(res.body.length).toBe(2);
      expect(res.body[0]).toEqual({ id: 1, security_level: "Pleb" });
    });
  });

  // REMOVE SECURITY LEVEL
  describe("DELETE /:id", () => {
    test("Delete security level by ID", async () => {
      const res = await request(server).del("/security_clearance/1");
      expect(res.status).toBe(202);
      expect(res.type).toMatch(/json/i);
      expect(res.body.length).toBe(1);
      expect(res.body[0]).toEqual({ id: 2, security_level: "Admin" });
    });
  });
});
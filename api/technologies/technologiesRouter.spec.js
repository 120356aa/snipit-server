const request = require("supertest");
const server = require("../../index.js");
const db = require("../../data/db.js");

let technologies = [
  { technology: "React" },
  { technology: "Javascript" }
];

describe("Technologies Route Handlers", () => {
  beforeEach(async () => {
    await db("technologies").insert(technologies);
  });

  afterEach(async () => {
    await db("technologies").truncate();
  });

  // GET ALL
  describe("GET /", () => {
    test("Returns an array of technologies", async () => {
      const res = await request(server).get("/technologies");
      expect(res.status).toBe(200);
      expect(res.type).toMatch(/json/i);
      expect(res.body.length).toBe(2);
    });
  });

  // GET BY ID
  describe("GET /:id", () => {
    test("Returns technology by ID", async () => {
      const res = await request(server).get("/technologies/1");
      expect(res.status).toBe(200);
      expect(res.type).toMatch(/json/i);
      expect(res.body).toEqual([{ id: 1, technology: "React" }]);
    });
  });

  // ADD TECHNOLOGY
  describe("POST /", () => {
    test("Adds new technology", async () => {
      const res = await request(server)
        .post("/technologies")
        .send({ technology: "Pleb" });
      expect(res.status).toBe(201);
      expect(res.type).toMatch(/json/i);
      expect(res.body.length).toBe(3)
      expect(res.body[2]).toEqual({ id: 3, technology: "Pleb" });
    });
  });

  // EDIT TECHNOLOGY
  describe("PUT /:id", () => {
    test("Updates technology by ID", async () => {
      const res = await request(server)
        .put("/technologies/1")
        .send({ technology: "Pleb" });
      expect(res.status).toBe(202);
      expect(res.type).toMatch(/json/i);
      expect(res.body.length).toBe(2);
      expect(res.body[0]).toEqual({ id: 1, technology: "Pleb" });
    });
  });

  // REMOVE TECHNOLOGY
  describe("DELETE /:id", () => {
    test("Delete technology by ID", async () => {
      const res = await request(server).del("/technologies/1");
      expect(res.status).toBe(202);
      expect(res.type).toMatch(/json/i);
      expect(res.body.length).toBe(1);
      expect(res.body[0]).toEqual({ id: 2, technology: "Javascript" });
    });
  });
});

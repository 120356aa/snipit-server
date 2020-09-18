const request = require("supertest");
const server = require("../../index.js");
const db = require("../../data/db.js");

let snippetAuthorizations = [
  { authorization: "Public" },
  { authorization: "Private" }
];

describe("Snippet Authorization Route Handlers", () => {
  beforeEach(async () => {
    await db("snippet_authorization").insert(snippetAuthorizations);
  });

  afterEach(async () => {
    await db("snippet_authorization").truncate();
  });

  // GET ALL
  describe("GET /", () => {
    test("Returns an array of report categories", async () => {
      const res = await request(server).get("/snippet_authorization");
      expect(res.status).toBe(200);
      expect(res.type).toMatch(/json/i);
      expect(res.body.length).toBe(2);
    });
  });

  // GET BY ID
  describe("GET /:id", () => {
    test("Returns report category by ID", async () => {
      const res = await request(server).get("/snippet_authorization/1");
      expect(res.status).toBe(200);
      expect(res.type).toMatch(/json/i);
      expect(res.body).toEqual([{ id: 1, authorization: "Public" }]);
    });
  });

  // ADD REPORT CATEGORY
  describe("POST /", () => {
    test("Adds new report category", async () => {
      const res = await request(server)
        .post("/snippet_authorization")
        .send({ authorization: "Pleb" });
      expect(res.status).toBe(201);
      expect(res.type).toMatch(/json/i);
      expect(res.body.length).toBe(3)
      expect(res.body[2]).toEqual({ id: 3, authorization: "Pleb" });
    });
  });

  // EDIT REPORT CATEGORY
  describe("PUT /:id", () => {
    test("Updates report category by ID", async () => {
      const res = await request(server)
        .put("/snippet_authorization/1")
        .send({ authorization: "Pleb" });
      expect(res.status).toBe(202);
      expect(res.type).toMatch(/json/i);
      expect(res.body.length).toBe(2);
      expect(res.body[0]).toEqual({ id: 1, authorization: "Pleb" });
    });
  });

  // REMOVE REPORT CATEGORY
  describe("DELETE /:id", () => {
    test("Delete report category by ID", async () => {
      const res = await request(server).del("/snippet_authorization/1");
      expect(res.status).toBe(202);
      expect(res.type).toMatch(/json/i);
      expect(res.body.length).toBe(1);
      expect(res.body[0]).toEqual({ id: 2, authorization: "Private" });
    });
  });
});
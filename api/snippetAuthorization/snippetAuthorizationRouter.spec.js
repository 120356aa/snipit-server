const request = require("supertest");
const server = require("../../index.js");
const db = require("../../data/db.js");

describe("Snippet Authorization Route Handlers", () => {
  beforeEach(async () => {
    await db("snippet_authorization").insert({ authorization: "User" });
  });

  afterEach(async () => {
    await db("snippet_authorization").truncate();
  });

  // GET All
  describe("GET /", () => {
    it("res status 200", async () => {
      const res = await request(server).get("/snippet_authorization");
      expect(res.status).toBe(200);
    });

    it("res with json", async () => {
      const res = await request(server).get("/snippet_authorization");
      expect(res.type).toMatch(/json/i);
    });

    it("res returns data", async () => {
      const res = await request(server).get("/snippet_authorization");
      expect(res.body).toEqual([{ id: 1, authorization: "User" }]);
    });
  });
});
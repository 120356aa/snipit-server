const request = require("supertest");
const server = require("../../index.js");
const db = require("../../data/db.js");

describe("Snippet Authorization Route Handlers", () => {
  beforeEach(async () => {
    await db("snippet_authorization").insert({ authorization: "Public" });
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
      expect(res.body).toEqual([{ id: 1, authorization: "Public" }]);
    });
  });

  // GET BY ID
  describe("GET /:id", () => {
    it("res status 200", async () => {
      const res = await request(server).get("/snippet_authorization/1");
      expect(res.status).toBe(200);
    });

    it("res with json", async () => {
      const res = await request(server).get("/snippet_authorization/1");
      expect(res.type).toMatch(/json/i);
    });

    it("res with correct data", async () => {
      const res = await request(server).get("/snippet_authorization/1");
      expect(res.body).toEqual({ id: 1, authorization: "Public" });
    });
  });

  // ADD SNIPPET AUTHORIZATION
  describe("POST /:id", () => {
    it("res status 201", async () => {
      const res = await request(server)
        .post("/snippet_authorization")
        .send({ authorization: "Private" });
      expect(res.status).toBe(201);
    });

    it("res with json", async () => {
      const res = await request(server)
        .post("/snippet_authorization")
        .send({ authorization: "Private" });
      expect(res.type).toMatch(/json/i);
    });

    it("res with correct data", async () => {
      const res = await request(server)
        .post("/snippet_authorization")
        .send({ authorization: "Private" });
      expect(res.body[1]).toEqual({ id: 2, authorization: "Private" });
    });
  });

  // EDIT SNIPPET AUTHORIZATION
  describe("PUT /:id", () => {
    it("res status 202", async () => {
      const res = await request(server)
        .put("/snippet_authorization/1")
        .send({ authorization: "Pleb" });
      expect(res.status).toBe(202);
    });

    it("res with json", async () => {
      const res = await request(server)
        .put("/snippet_authorization/1")
        .send({ authorization: "Pleb" });
      expect(res.type).toMatch(/json/i);
    });

    it("res with correct data", async () => {
      const res = await request(server)
        .put("/snippet_authorization/1")
        .send({ authorization: "Pleb" });
      expect(res.body[0]).toEqual({ id: 1, authorization: "Pleb" });
    });
  });

  // REMOVE SNIPPET AUTHORIZATION
  describe("DELETE /:id", () => {
    it("res status 202", async () => {
      await request(server).post("/snippet_authorization").send({ authorization: "Private" });
      const res = await request(server).del("/snippet_authorization/1");
      expect(res.status).toBe(202);
    });

    it("res with json", async () => {
      await request(server).post("/snippet_authorization").send({ authorization: "Private" });
      const res = await request(server).del("/snippet_authorization/1");
      expect(res.type).toMatch(/json/i);
    });

    it("res with correct data", async () => {
      await request(server).post("/snippet_authorization").send({ authorization: "Private" });
      const res = await request(server).del("/snippet_authorization/1");
      expect(res.body[0]).toEqual({ id: 2, authorization: "Private" });
    });
  });
});
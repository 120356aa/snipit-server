const request = require("supertest");
const server = require("../../index.js");
const db = require("../../data/db.js");

describe("Technologies Route Handlers", () => {
  beforeEach(async () => {
    await db("technologies").insert({ technology: "React" });
  });

  afterEach(async () => {
    await db("technologies").truncate();
  });

  // GET All
  describe("GET /", () => {
    it("res status 200", async () => {
      const res = await request(server).get("/technologies");
      expect(res.status).toBe(200);
    });

    it("res with json", async () => {
      const res = await request(server).get("/technologies");
      expect(res.type).toMatch(/json/i);
    });

    it("res returns data", async () => {
      const res = await request(server).get("/technologies");
      expect(res.body).toEqual([{ id: 1, technology: "React" }]);
    });
  });

  // GET BY ID
  describe("GET /:id", () => {
    it("res status 200", async () => {
      const res = await request(server).get("/technologies/1");
      expect(res.status).toBe(200);
    });

    it("res with json", async () => {
      const res = await request(server).get("/technologies/1");
      expect(res.type).toMatch(/json/i);
    });

    it("res with correct data", async () => {
      const res = await request(server).get("/technologies/1");
      expect(res.body).toEqual({ id: 1, technology: "React" });
    });
  });

  // ADD TECHNOLOGY
  describe("POST /:id", () => {
    it("res status 201", async () => {
      const res = await request(server)
        .post("/technologies")
        .send({ technology: "Javascript" });
      expect(res.status).toBe(201);
    });

    it("res with json", async () => {
      const res = await request(server)
        .post("/technologies")
        .send({ technology: "Javascript" });
      expect(res.type).toMatch(/json/i);
    });

    it("res with correct data", async () => {
      const res = await request(server)
        .post("/technologies")
        .send({ technology: "Javascript" });
      expect(res.body).toEqual([
        { id: 1, technology: "React" },
        { id: 2, technology: "Javascript" },
      ]);
    });
  });

  // EDIT TECHNOLOGY
  //   describe("PUT /:id", () => {

  //   });
});

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
      expect(res.body[1]).toEqual({ id: 2, technology: "Javascript" });
    });
  });

  // EDIT TECHNOLOGY
  describe("PUT /:id", () => {
    it("res status 202", async () => {
      const res = await request(server)
        .put("/technologies/1")
        .send({ technology: "Vue" });
      expect(res.status).toBe(202);
    });

    it("res with json", async () => {
      const res = await request(server)
        .put("/technologies/1")
        .send({ technology: "Vue" });
      expect(res.type).toMatch(/json/i);
    });

    it("res with correct data", async () => {
      const res = await request(server)
        .put("/technologies/1")
        .send({ technology: "Vue" });
      expect(res.body[0]).toEqual({ id: 1, technology: "Vue" });
    });
  });

  // REMOVE TECHNOLOGY
  describe("DELETE /:id", () => {
    it("res status 202", async () => {
      await request(server).post("/technologies").send({ technology: "Vue" });
      const res = await request(server).del("/technologies/1");
      expect(res.status).toBe(202);
    });

    it("res with json", async () => {
      await request(server).post("/technologies").send({ technology: "Vue" });
      const res = await request(server).del("/technologies/1");
      expect(res.type).toMatch(/json/i);
    });

    it("res with correct data", async () => {
      await request(server).post("/technologies").send({ technology: "Vue" });
      const res = await request(server).del("/technologies/1");
      expect(res.body[0]).toEqual({ id: 2, technology: "Vue" });
    });
  });
});

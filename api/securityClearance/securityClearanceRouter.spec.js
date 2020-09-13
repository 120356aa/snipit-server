const request = require("supertest");
const server = require("../../index.js");
const db = require("../../data/db.js");

describe("Security Clearance Route Handlers", () => {
  beforeEach(async () => {
    await db("security_clearance").insert({ security_level: "User" });
  });

  afterEach(async () => {
    await db("security_clearance").truncate();
  });

    // GET All
    describe("GET /", () => {
      it("res status 200", async () => {
        const res = await request(server).get("/security_clearance");
        expect(res.status).toBe(200);
      });
  
      it("res with json", async () => {
        const res = await request(server).get("/security_clearance");
        expect(res.type).toMatch(/json/i);
      });
  
      it("res returns data", async () => {
        const res = await request(server).get("/security_clearance");
        expect(res.body).toEqual([{ id: 1, security_level: "User" }]);
      });
    });

  // GET BY ID
  describe("GET /:id", () => {
    it("res status 200", async () => {
      const res = await request(server).get("/security_clearance/1");
      expect(res.status).toBe(200);
    });

    it("res with json", async () => {
      const res = await request(server).get("/security_clearance/1");
      expect(res.type).toMatch(/json/i);
    });

    it("res with correct data", async () => {
      const res = await request(server).get("/security_clearance/1");
      expect(res.body).toEqual({ id: 1, security_level: "User" });
    });
  });

  // ADD SECURITY CLEARANCE
  describe("POST /:id", () => {
    it("res status 201", async () => {
      const res = await request(server)
        .post("/security_clearance")
        .send({ security_level: "Admin" });
      expect(res.status).toBe(201);
    });

    it("res with json", async () => {
      const res = await request(server)
        .post("/security_clearance")
        .send({ security_level: "Admin" });
      expect(res.type).toMatch(/json/i);
    });

    it("res with correct data", async () => {
      const res = await request(server)
        .post("/security_clearance")
        .send({ security_level: "Admin" });
      expect(res.body[1]).toEqual({ id: 2, security_level: "Admin" });
    });
  });

  // EDIT SECURITY CLEARANCE
  describe("PUT /:id", () => {
    it("res status 202", async () => {
      const res = await request(server)
        .put("/security_clearance/1")
        .send({ security_level: "Pleb" });
      expect(res.status).toBe(202);
    });

    it("res with json", async () => {
      const res = await request(server)
        .put("/security_clearance/1")
        .send({ security_level: "Pleb" });
      expect(res.type).toMatch(/json/i);
    });

    it("res with correct data", async () => {
      const res = await request(server)
        .put("/security_clearance/1")
        .send({ security_level: "Pleb" });
      expect(res.body[0]).toEqual({ id: 1, security_level: "Pleb" });
    });
  });

  // REMOVE SECURITY CLEARANCE
  describe("DELETE /:id", () => {
    it("res status 202", async () => {
      await request(server).post("/security_clearance").send({ security_level: "Admin" });
      const res = await request(server).del("/security_clearance/1");
      expect(res.status).toBe(202);
    });

    it("res with json", async () => {
      await request(server).post("/security_clearance").send({ security_level: "Admin" });
      const res = await request(server).del("/security_clearance/1");
      expect(res.type).toMatch(/json/i);
    });

    it("res with correct data", async () => {
      await request(server).post("/security_clearance").send({ security_level: "Admin" });
      const res = await request(server).del("/security_clearance/1");
      expect(res.body[0]).toEqual({ id: 2, security_level: "Admin" });
    });
  });
});
const request = require("supertest");
const server = require("../../index.js");
const db = require("../../data/db.js");

describe("Security Clearance Route Handlers", () => {
  beforeEach(async () => {
    await db("security_clearance").insert({ security_level: "Public" });
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
        expect(res.body).toEqual([{ id: 1, security_level: "Public" }]);
      });
    });
});
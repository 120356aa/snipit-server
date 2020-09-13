const request = require("supertest");
const server = require("../../index.js");
const db = require("../../data/db.js");

describe("Technologies Route Handlers", () => {
  //   beforeEach(async () => {
  //     await request(server)
  //       .post("/technologies/")
  //       .send({ id: 1, technology: "React" });
  //   });

  //   afterEach(async () => {
  //     await db("technologies").truncate();
  //   });

  describe("Get /", () => {
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

  describe("Get /id", () => {
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
});

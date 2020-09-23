const request = require("supertest");
const server = require("../../index.js");
const db = require("../../data/db.js");

const {
  users,
  usersFollows,
  usersSettings
} = require("./usersSpecImports.js");

describe("Users Route Handlers", () => {
  beforeEach(async () => {
    await db("users").insert(users);
    await db("follows").insert(usersFollows);
    await db("user_settings").insert(usersSettings);
  });

  afterEach(async () => {
    await db("users").truncate();
  });

  // GET ALL USERS
  describe("GET /", () => {
    test("Returns an array of users", async () => {
      const res = await request(server).get("/users");
      expect(res.status).toBe(200);
      expect(res.type).toMatch(/json/i);
      expect(res.body.length).toBe(2);
    });
  });

  // GET USER BY ID
  describe("GET /:id", () => {
    test("Returns user by ID", async () => {
      const res = await request(server).get("/users/1");
      expect(res.status).toBe(200);
      expect(res.type).toMatch(/json/i);
      expect(res.body).toEqual([
        {
          id: 1,
          uuid: "sdf165s8d1fs6d98fsdf3",
          display_name: "Sn0w",
          image: "http://localhost:5000",
          about: "sjodifjsdf osdf josdfoi  sso dfoisf osdfo isdf sf soif s ",
          created_at: "10:50AM 03/15/20"
        }
      ]);
    });
  });
});
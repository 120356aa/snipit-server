const db = require("../../data/db.js");

module.exports = {
  getAll,
  getById,
};

async function getAll() {
  return db("users");
}

async function getById(id) {
  return db("users")
          .where("id", Number(id));
}
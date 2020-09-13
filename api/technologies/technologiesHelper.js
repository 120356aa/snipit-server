const db = require("../../data/db.js");

module.exports = {
  getAll,
  getTechnologyById,
};

async function getAll() {
  return db("technologies");
}

async function getTechnologyById(id) {
  return db("technologies").where("id", Number(id));
}

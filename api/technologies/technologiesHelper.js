const db = require("../../data/db.js");

module.exports = {
  getAll,
};

async function getAll() {
  return db("technologies");
}

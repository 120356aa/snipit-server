const db = require("../../data/db.js");

module.exports = {
  getAll,
  getSecurityClearanceById,
  addSecurityClearance,
  updateSecurityClearance,
  removeSecurityClearance,
  checkForSecurityClearance
};

async function getAll() {
  return db("security_clearance");
}

async function getSecurityClearanceById(id) {
  return db("security_clearance")
          .where("id", Number(id));
}

async function addSecurityClearance(newSecurityClearance) {
  return db("security_clearance")
          .insert(newSecurityClearance);
}

async function updateSecurityClearance(id, changes) {
  return db("security_clearance")
          .where("id", Number(id))
          .update(changes);
}

async function removeSecurityClearance(id) {
  return db("security_clearance")
          .where("id", Number(id))
          .del();
}

async function checkForSecurityClearance(newSecurityClearance) {
  return db("security_clearance")
          .where("security_level", newSecurityClearance.security_level);
}

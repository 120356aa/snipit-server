const db = require("../../data/db.js");

module.exports = {
  getAll,
  // getSecurityClearanceById,
  // addSecurityClearance,
  // updateSecurityClearance,
  // removeSecurityClearance,
  // checkForSecurityClearance
};

async function getAll() {
  return db("security_clearance");
}

// async function getTechnologyById(id) {
//   return db("technologies")
//           .where("id", Number(id));
// }

// async function addTechnology(newTechnology) {
//   return db("technologies")
//           .insert(newTechnology);
// }

// async function updateTechnology(id, changes) {
//   return db("technologies")
//           .where("id", Number(id))
//           .update(changes);
// }

// async function removeTechnology(id) {
//   return db("technologies")
//           .where("id", Number(id))
//           .del();
// }

// async function checkForTechnology(newTechnology) {
//   return db("technologies")
//           .where("technology", newTechnology.technology);
// }

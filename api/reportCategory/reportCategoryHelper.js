const db = require("../../data/db.js");

module.exports = {
  getAll,
  // getById,
  // addAccountType,
  // updateAccountType,
  // removeAccountType,
  // checkExisting
};

async function getAll() {
  return db("report_category");
}

// async function getById(id) {
//   return db("report_category")
//           .where("id", Number(id));
// }

// async function addAccountType(newAccountType) {
//   return db("report_category")
//           .insert(newAccountType);
// }

// async function updateAccountType(id, changes) {
//   return db("report_category")
//           .where("id", Number(id))
//           .update(changes);
// }

// async function removeAccountType(id) {
//   return db("report_category")
//           .where("id", Number(id))
//           .del();
// }

// async function checkExisting(newAccountType) {
//   return db("report_category")
//           .where("type", newAccountType.type);
// }
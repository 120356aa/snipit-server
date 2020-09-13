const db = require("../../data/db.js");

module.exports = {
  getAll,
  getById,
  addAccountType,
  updateAccountType,
  removeAccountType,
  checkExisting
};

async function getAll() {
  return db("account_type");
}

async function getById(id) {
  return db("account_type")
          .where("id", Number(id));
}

async function addAccountType(newAccountType) {
  return db("account_type")
          .insert(newAccountType);
}

async function updateAccountType(id, changes) {
  return db("account_type")
          .where("id", Number(id))
          .update(changes);
}

async function removeAccountType(id) {
  return db("account_type")
          .where("id", Number(id))
          .del();
}

async function checkExisting(newAccountType) {
  return db("account_type")
          .where("type", newAccountType.type);
}
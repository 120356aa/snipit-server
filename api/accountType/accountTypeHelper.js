const db = require("../../data/db.js");

module.exports = {
  getAll,
  getAccountTypeById,
  // addAccountType,
  // updateAccountType,
  // removeAccountType,
  // checkForAccountType
};

async function getAll() {
  return db("account_type");
}

async function getAccountTypeById(id) {
  return db("account_type")
          .where("id", Number(id));
}
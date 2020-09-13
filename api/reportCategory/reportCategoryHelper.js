const db = require("../../data/db.js");

module.exports = {
  getAll,
  getById,
  addReportCategory,
  updateReportCategory,
  // removeReportCategory,
  checkExisting
};

async function getAll() {
  return db("report_category");
}

async function getById(id) {
  return db("report_category")
          .where("id", Number(id));
}

async function addReportCategory(newReportCategory) {
  return db("report_category")
          .insert(newReportCategory);
}

async function updateReportCategory(id, changes) {
  return db("report_category")
          .where("id", Number(id))
          .update(changes);
}

// async function removeReportCategory(id) {
//   return db("report_category")
//           .where("id", Number(id))
//           .del();
// }

async function checkExisting(newReportCategory) {
  return db("report_category")
          .where("category", newReportCategory.category);
}
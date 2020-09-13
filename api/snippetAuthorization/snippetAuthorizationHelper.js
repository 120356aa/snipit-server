const db = require("../../data/db.js");

module.exports = {
  getAll,
  getById,
  addSnippetAuthorization,
  updateSnippetAuthorization,
  removeSnippetAuthorization,
  checkExisting
};

async function getAll() {
  return db("snippet_authorization");
}

async function getById(id) {
  return db("snippet_authorization")
          .where("id", Number(id));
}

async function addSnippetAuthorization(newSnippetAuthorization) {
  return db("snippet_authorization")
          .insert(newSnippetAuthorization);
}

async function updateSnippetAuthorization(id, changes) {
  return db("snippet_authorization")
          .where("id", Number(id))
          .update(changes);
}

async function removeSnippetAuthorization(id) {
  return db("snippet_authorization")
          .where("id", Number(id))
          .del();
}

async function checkExisting(newSnippetAuthorization) {
  return db("snippet_authorization")
          .where("authorization", newSnippetAuthorization.authorization);
}

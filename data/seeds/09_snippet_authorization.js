
exports.seed = function(knex) {
  return knex('snippet_authorization').truncate()
    .then(function () {
      return knex('snippet_authorization').insert([
        {
          authorization: 'private'
        },
        {
          authorization: 'public'
        }
      ]);
    });
};

exports.seed = function(knex, Promise) {
  return knex('snippet_authorization').truncate()
    .then(function () {
      return knex('snippet_authorization').insert([
        { authorization: 'private' },
        { authorization: 'public' }
      ]);
    });
};

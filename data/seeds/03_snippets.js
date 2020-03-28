exports.seed = function(knex) {
  return knex('snippets').del()
    .then(function () {
      return knex('snippets').insert([

      ]);
    });
};

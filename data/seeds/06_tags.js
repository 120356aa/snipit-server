exports.seed = function(knex) {
  return knex('tags').del()
    .then(function () {
      return knex('tags').insert([

      ]);
    });
};

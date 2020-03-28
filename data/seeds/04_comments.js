exports.seed = function(knex) {
  return knex('comments').del()
    .then(function () {
      return knex('comments').insert([

      ]);
    });
};

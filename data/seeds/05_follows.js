exports.seed = function(knex) {
  return knex('follows').del()
    .then(function () {
      return knex('follows').insert([

      ]);
    });
};

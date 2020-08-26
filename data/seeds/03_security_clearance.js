
exports.seed = function(knex) {
  return knex('security_clearance').truncate()
    .then(function () {
      return knex('security_clearance').insert([
        {
          security_level: 'public'
        },
        {
          security_level: 'private'
        }
      ]);
    });
};

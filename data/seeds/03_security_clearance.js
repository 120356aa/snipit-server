
exports.seed = function(knex) {
  return knex('security_clearance').truncate()
    .then(function () {
      return knex('security_clearance').insert([
        {
          security_level: 'user'
        },
        {
          security_level: 'mod'
        },
        {
          security_level: 'admin'
        },
        {
          security_level: 'godmode'
        }
      ]);
    });
};

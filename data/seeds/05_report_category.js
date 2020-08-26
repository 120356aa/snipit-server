exports.seed = function(knex) {
  return knex('report_category').truncate()
    .then(function () {
      return knex('report_category').insert([
        {
          category: 'innapropriate'
        },
        {
          category: 'dublicate'
        },
        {
          category: 'spam'
        }
      ]);
    });
};

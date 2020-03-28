exports.seed = function(knex) {
    return knex('snippet_reports').del()
      .then(function () {
        return knex('snippet_reports').insert([
  
        ]);
      });
  };
  
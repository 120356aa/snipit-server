exports.seed = function(knex) {
    return knex('comment_reports').del()
      .then(function () {
        return knex('comment_reports').insert([
  
        ]);
      });
  };
  
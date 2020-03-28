exports.seed = function(knex) {
    return knex('snippet_likes').del()
      .then(function () {
        return knex('snippet_likes').insert([
  
        ]);
      });
  };
  
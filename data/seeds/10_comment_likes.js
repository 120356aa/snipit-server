exports.seed = function(knex) {
    return knex('comment_likes').del()
      .then(function () {
        return knex('comment_likes').insert([
  
        ]);
      });
  };
  
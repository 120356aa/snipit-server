let faker = require('faker');

exports.seed = function(knex, Promise) {
  return knex('comment_likes').truncate()
    .then(function () {
      return knex('comment_likes').insert([
        {
          comment_id: 1,
          user_id: 1,
          view_status: 1,
          created_at: `${faker.date.future()}`
        },
        {
          comment_id: 4,
          user_id: 1,
          view_status: 0,
          created_at: `${faker.date.future()}`
        },
        {
          comment_id: 5,
          user_id: 2,
          view_status: 1,
          created_at: `${faker.date.future()}`
        },
        {
          comment_id: 4,
          user_id: 3,
          view_status: 1,
          created_at: `${faker.date.future()}`
        },
        {
          comment_id: 6,
          user_id: 4,
          view_status: 1,
          created_at: `${faker.date.future()}`
        },
        {
          comment_id: 2,
          user_id: 4,
          view_status: 0,
          created_at: `${faker.date.future()}`
        },
        {
          comment_id: 6,
          user_id: 5,
          view_status: 1,
          created_at: `${faker.date.future()}`
        },
      ]);
    });
};

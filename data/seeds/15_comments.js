let faker = require('faker');

exports.seed = function(knex, Promise) {
  return knex('comments').truncate()
    .then(function () {
      return knex('comments').insert([
        {
          snippet_id: 1,
          user_id: 1,
          comment: `${faker.lorem.sentences()}`,
          created_at: `${faker.date.future()}`
        },
        {
          snippet_id: 1,
          user_id: 2,
          comment: `${faker.lorem.sentences()}`,
          created_at: `${faker.date.future()}`
        },
        {
          snippet_id: 3,
          user_id: 5,
          comment: `${faker.lorem.sentences()}`,
          created_at: `${faker.date.future()}`
        },
        {
          snippet_id: 4,
          user_id: 4,
          comment: `${faker.lorem.sentences()}`,
          created_at: `${faker.date.future()}`
        },
        {
          snippet_id: 5,
          user_id: 4,
          comment: `${faker.lorem.sentences()}`,
          created_at: `${faker.date.future()}`
        },
        {
          snippet_id: 7,
          user_id: 3,
          comment: `${faker.lorem.sentences()}`,
          created_at: `${faker.date.future()}`
        },
        {
          snippet_id: 9,
          user_id: 2,
          comment: `${faker.lorem.sentences()}`,
          created_at: `${faker.date.future()}`
        },
        {
          snippet_id: 8,
          user_id: 4,
          comment: `${faker.lorem.sentences()}`,
          created_at: `${faker.date.future()}`
        },
      ]);
    });
};

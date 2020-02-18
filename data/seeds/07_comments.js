
exports.seed = function(knex) {
  return knex('comments').del()
    .then(function () {
      return knex('comments').insert([
        {
          id: 1,
          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          created_at: "2011-10-02 18:48:05.123",
          user_id: 1,
          snippet_id: 2
        },
      ]);
    });
};

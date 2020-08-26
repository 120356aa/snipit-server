exports.seed = function(knex, Promise) {
  return knex('technologies').truncate()
    .then(function () {
      return knex('technologies').insert([
        { technology: 'javascript' },
        { technology: 'php' },
        { technology: 'python' },
        { technology: 'html' },
        { technology: 'css' },
        { technology: 'react' },
        { technology: 'vue' },
        { technology: 'angular' },
        { technology: 'swift' },
        { technology: 'node' },
        { technology: 'go' },
        { technology: 'sql' }
      ]);
    });
};

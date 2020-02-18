exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          id: 1,
          uid: 'sdf984s1d6f19s1d6f19s1d',
          display_name: 'Sn0w',
          image: 'https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit-640x354.jpg',
          account_type: 3,
          created_at: "2011-10-02 18:48:05.123"
        },
        {
          id: 2,
          uid: 'sdfgsd96fg84sd9fg4s9df4',
          display_name: 'Bob',
          image: 'https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit-640x354.jpg',
          account_type: 2,
          created_at: "2011-10-02 18:48:05.123"
        },
        {
          id: 3,
          uid: 'dfpgmopoert161fg468fghf',
          display_name: 'Elmo',
          image: 'https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit-640x354.jpg',
          account_type: 1,
          created_at: "2011-10-02 18:48:05.123"
        },
      ]);
    });
};

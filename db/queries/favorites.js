const db = require('../connection');

const getFavs = (user) => {
  return db.query(`
    SELECT items.photo, items.price, items.title, items.location_city, items.location_province
    FROM favorites
    JOIN items ON favorites.item_id = items.id
    JOIN users ON favorites.user_id = users.id
    WHERE users.email = $1;
  `, [user])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getFavs };


// const db = require('../connection');

// const getFavs = () => {
//   return db.query(`
//     SELECT items.photo, items.price, items.title, items.location_city, items.location_province
//     FROM favorites
//     JOIN items ON favorites.item_id = items.id
//     JOIN users ON favorites.user_id = users.id
//     WHERE user_id = 3;
//   `)
//     .then(data => {
//       return data.rows;
//     });
// };

// module.exports = { getFavs };



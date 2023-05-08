const db = require('../connection');

const getFavs = () => {
  return db.query(`
    SELECT items.photo, items.price, items.title, items.location_city, items.location_province
    FROM favorites
    JOIN items ON favorites.item_id = items.id
    JOIN users ON favorites.user_id = users.id
    WHERE user_id = 1;
  `)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getFavs };



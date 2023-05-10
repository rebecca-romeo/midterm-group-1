const db = require('../connection.js');

const getItemByPrice = (minPrice, maxPrice) => {
  return db
    .query(`
    SELECT items.*
    FROM items
    WHERE price >= minPrice AND price <= maxPrice;`, [minPrice, maxPrice])
    .then((result) => {
      console.log(result);
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = {
  getItemById
};

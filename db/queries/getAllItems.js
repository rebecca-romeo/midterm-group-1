const db = require('../connection.js');

const getAllItems = () => {
  return db
    .query(`
    SELECT id, title, price, photo, location_city, location_province, category, status_sold
    FROM items
    LEFT JOIN
    WHERE status_available = TRUE
    ORDER BY created_at`)
    .then((result) => {
      console.log("check items:", result)
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = {
  getAllItems
};

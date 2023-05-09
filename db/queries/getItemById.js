const db = require('../connection.js');

const getItemById = (id) => {
  return db
    .query(`
    SELECT items.*
    FROM items
    WHERE id = $1`, [id])
    .then((result) => {
      console.log("check item:", result)
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = {
  getItemById
};

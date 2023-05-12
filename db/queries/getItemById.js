const db = require('../connection.js');

/*const getItemById = (id) => {
  return db
    .query(`
    SELECT items.*
    FROM items
    WHERE id = $1`, [id])
    .then((result) => {
      console.log(result);
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};*/

const getItemById = (id) => {
  return db
    .query(`
    SELECT items.*, users.email
    FROM items
    JOIN users ON items.owner_id = users.id
    WHERE items.id = $1
    ORDER BY created_at`,[id])
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

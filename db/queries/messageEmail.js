const db = require('../connection.js');

//To fetch the Seller Email ID for the intrested item
const messageEmail = (id) => {
  return db
    .query(`
    SELECT users.email,items.title
    FROM items
    JOIN users ON items.owner_id = users.id
    WHERE items.id = $1
    AND status_available = true
    ORDER BY created_at`,[id])
    .then((data) => {
      return data.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = {  messageEmail };

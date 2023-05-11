const db = require('../connection.js');

//To fetch the Seller Email ID based on item ID
//Getting the the owner_id from items tables based on itemID and joining the owner_id with users id to get seller email.
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

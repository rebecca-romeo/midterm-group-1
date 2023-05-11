const db = require('../connection.js');

//update the sold status of a item for a particular login user
const markUnSold = (itemId) => {
  return db
    .query(`
    UPDATE items
    SET status_sold  = false
    WHERE items.id = $1`,[itemId])
    .then((data) => {
      return data.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = {  markUnSold };

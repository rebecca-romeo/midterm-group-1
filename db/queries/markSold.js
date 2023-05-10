const db = require('../connection.js');

//update the sold status of a item for a particular login user
const markSold = (itemId) => {
  return db
    .query(`
    UPDATE items
    SET status_sold  = true
    WHERE items.id = $1`,[itemId])
    .then((data) => {
      return data.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = {  markSold };

const db = require('../connection');
const { getUsers } = require('./users');

const getUserIdFromEmail = (email) => {
  return db.query( `
  select id from users
  where email = $1;
  `, [email]);
}

const createSellListing = (sellItem, owner_id) => {
  const {
    title,
    price,
    photo,
    location_city,
    location_province,
    condition,
    description,
  } = sellItem;

  return db.query(`
  INSERT INTO items (title, price, photo, location_city, location_province, category, condition, description, created_at, owner_id)
  VALUES ($1, $2, $3, $4, $5, 'desk', $6, $7, Now(), $8)
  RETURNING *;
`, [title, price, photo, location_city, location_province, condition, description, owner_id]);
};

module.exports = { createSellListing, getUserIdFromEmail };




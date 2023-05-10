const db = require('../connection');

const createSellListing = (sellItem) => {
  const {
    title,
    price,
    location_city,
    location_province,
    condition,
    description,
  } = sellItem;

  return db.query(`
  INSERT INTO items (title, price, photo, location_city, location_province, category, condition, description, created_at)
  VALUES ($1, $2, 'white_desk.jpg', $3, $4, 'desk', $5, $6, Now())
  RETURNING *;
`, [title, price, location_city, location_province, condition, description]);
};

module.exports = { createSellListing };

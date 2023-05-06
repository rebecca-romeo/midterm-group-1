DROP TABLE IF EXISTS items CASCADE;
CREATE TABLE items (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  price INTEGER NOT NULL,
  photo VARCHAR(255) NOT NULL,
  location_city VARCHAR(255) NOT NULL,
  location_province VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  condition VARCHAR(255) NOT NULL,
  description VARCHAR(2000) NOT NULL,
  status_sold BOOLEAN NOT NULL DEFAULT FALSE,
  status_available BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP NOT NULL,
  owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

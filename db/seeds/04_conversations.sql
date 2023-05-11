-- CREATE TABLE conversations (
--   id SERIAL PRIMARY KEY NOT NULL,
--   user1_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
--   user2_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
--   item_id INTEGER REFERENCES items(id) ON DELETE CASCADE
-- );

INSERT INTO conversations (buyer_id, seller_id, item_id) VALUES (1, 2, 2);

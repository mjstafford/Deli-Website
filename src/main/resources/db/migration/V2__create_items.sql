CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  cost NUMERIC NOT NULL,
  food_category_id INTEGER REFERENCES food_categories(id)
);
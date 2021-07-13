CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  cost NUMERIC NOT NULL,
  image VARCHAR(255) NOT NULL,
  featured BOOLEAN NOT NULL DEFAULT false,
  food_category_id INTEGER REFERENCES food_categories(id)
);
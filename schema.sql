DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  primary key(item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Portal", "Video Games", 19.95, 28),
  ("Call of Duty: Modern Warfare", "Video Games", 54.95, 200),
  ("Loco Moco", "Food and Drink", 9.99, 52),
  ("Adidas UltraBoosts", "Apparel", 179.99, 15),
  ("Cargo Shorts", "Apparel", 29.99, 75),
  ("Toilet Paper", "Necessities", 15.99, 52),
  ("The Matrix", "Films", 19.99, 35),
  ("Star Trek", "Films", 19.99, 67),
  ("Sorry", "Board Games", 14.99, 33),
  ("Clue", "Board Games", 19.95, 26);
  
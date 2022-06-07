USE ucode_web;

CREATE TABLE IF NOT EXISTS heroes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL,
    description VARCHAR(255) NOT NULL,
    class_role ENUM('tankman','healer','dps') NOT NULL
);
CREATE DATABASE IF NOT EXISTS ucode_web;

CREATE USER 'osoldatko'@'localhost' IDENTIFIED BY 'securepass';

GRANT ALL PRIVILEGES ON ucode_web. * TO 'osoldatko'@'localhost';

FLUSH PRIVILEGES;

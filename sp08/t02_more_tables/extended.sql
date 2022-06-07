USE ucode_web;

CREATE TABLE IF NOT EXISTS powers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type ENUM('attack','defense') NOT NULL
);

CREATE TABLE IF NOT EXISTS heroes_powers (
    hero_id INT NOT NULL, 
    power_id INT NOT NULL,
    power_points INT NOT NULL,
    PRIMARY KEY (hero_id, power_id),
    FOREIGN KEY (power_id) REFERENCES powers (id) ON DELETE CASCADE,
    FOREIGN KEY (hero_id) REFERENCES heroes (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS races (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(255) NOT NULL
);

ALTER TABLE heroes
    ADD race_id INT NOT NULL;

SET FOREIGN_KEY_CHECKS = 0;

ALTER TABLE heroes
    ADD CONSTRAINT fk_race_id
    FOREIGN KEY ( race_id )
    REFERENCES races ( id )
    ON DELETE CASCADE
    ON UPDATE CASCADE; 

SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE IF NOT EXISTS teams (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS heroes_teams (
    hero_id INT NOT NULL, 
    team_id INT,
    FOREIGN KEY (hero_id) REFERENCES heroes (id) ON DELETE CASCADE,
    FOREIGN KEY (team_id) REFERENCES teams (id) ON DELETE CASCADE
);
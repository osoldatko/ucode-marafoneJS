USE ucode_web;

INSERT INTO powers (name, type)
    VALUES  ("bloody fist", "attack"),
            ("iron shield", "defense"),
            ("bayraktar", "defense"),
            ("oracle mark", "attack");

INSERT INTO races (name)
    VALUES  ("human"),
            ("kree"),
            ("aboba");

INSERT INTO teams (name)
    VALUES  ("Avengers"),
            ("Hydra"),
            ("KHPI");

INSERT INTO heroes_teams (hero_id, team_id)
    VALUES  (1, 2),
            (2, 2),
            (3, 1),
            (3, 2),
            (4, 3),
            (5, NULL),
            (6, 1),
            (7, 1),
            (7, 3),
            (8, NULL),
            (9, 2),
            (9, 3),
            (10, 3);

INSERT INTO heroes_powers (hero_id, power_id, power_points)
    VALUES  (1, 1, 100),
            (2, 2, 300),
            (3, 2, 230),
            (4, 3, 400),
            (5, 3, 250),
            (6, 3, 499),
            (7, 1, 121),
            (8, 2, 222),
            (9, 2, 499),
            (10, 3, 232);

UPDATE heroes SET race_id = 1 WHERE id = 1;
UPDATE heroes SET race_id = 2 WHERE id = 2;
UPDATE heroes SET race_id = 2 WHERE id = 3;
UPDATE heroes SET race_id = 3 WHERE id = 4;
UPDATE heroes SET race_id = 1 WHERE id = 5;
UPDATE heroes SET race_id = 3 WHERE id = 6;
UPDATE heroes SET race_id = 1 WHERE id = 7;
UPDATE heroes SET race_id = 1 WHERE id = 8;
UPDATE heroes SET race_id = 2 WHERE id = 9;
UPDATE heroes SET race_id = 3 WHERE id = 10;

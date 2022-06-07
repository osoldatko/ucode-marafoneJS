USE ucode_web;

SELECT heroes.id, heroes.name AS "THE MOST POWERFUL", (
    SELECT heroes_powers.power_points
        FROM heroes_powers
        WHERE heroes_powers.hero_id = heroes.id
    ) AS Power
FROM heroes
ORDER BY Power DESC, heroes.id LIMIT 1;


SELECT heroes.id, heroes.name, heroes_powers.power_points AS 'power' FROM heroes 
JOIN heroes_powers ON (heroes.id = heroes_powers.hero_id)
JOIN powers ON (powers.id = heroes_powers.power_id AND powers.type = 'defense') 
ORDER BY power_points ASC
LIMIT 1;


SELECT heroes.id, heroes.name, (
    SELECT COUNT(heroes_teams.team_id)
        FROM heroes_teams
        WHERE heroes_teams.hero_id = heroes.id
    ) AS jobs, (
    SELECT heroes_powers.power_points
        FROM heroes_powers
        WHERE heroes_powers.hero_id = heroes.id
    ) AS Power
FROM heroes
GROUP BY heroes.id
HAVING jobs <= 1
ORDER BY Power DESC;


SELECT teams.name, SUM(heroes_powers.power_points) AS 'power' FROM teams
JOIN heroes_teams ON (teams.id = heroes_teams.team_id) 
JOIN heroes_powers ON (heroes_teams.hero_id = heroes_powers.hero_id) 
WHERE teams.name = 'Avengers' OR teams.name = 'Hydra'
GROUP BY teams.name;

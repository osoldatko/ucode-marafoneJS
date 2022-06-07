USE ucode_web;

SELECT heroes.*, races.name AS race, COUNT(heroes_teams.team_id) AS teams FROM heroes_teams
JOIN heroes ON (heroes_teams.hero_id = heroes.id)
JOIN races ON (heroes.race_id = races.id)
WHERE (races.name != 'human' AND heroes.name REGEXP 'a' AND (heroes.class_role = 'tankman' OR heroes.class_role = 'healer'))
GROUP BY heroes.id 
HAVING teams > 1
ORDER BY heroes.id ASC LIMIT 1;
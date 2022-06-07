USE ucode_web;

SELECT heroes.name as "Name", teams.name  as "Team"
FROM heroes 
    LEFT OUTER JOIN heroes_teams ON heroes.id = heroes_teams.hero_id
    LEFT OUTER JOIN teams ON heroes_teams.team_id = teams.id;

SELECT heroes.name as "Name", powers.name as "Power" 
FROM heroes 
    RIGHT OUTER JOIN heroes_powers ON heroes.id = heroes_powers.hero_id
    RIGHT OUTER JOIN powers ON heroes_powers.power_id = powers.id;

SELECT heroes.name as "Name", powers.name as "Power", teams.name as "Team" 
FROM heroes 
    INNER JOIN heroes_powers ON heroes.id = heroes_powers.hero_id
    INNER JOIN powers ON heroes_powers.power_id = powers.id
    INNER JOIN heroes_teams ON heroes.id = heroes_teams.hero_id
    INNER JOIN teams ON heroes_teams.team_id = teams.id;


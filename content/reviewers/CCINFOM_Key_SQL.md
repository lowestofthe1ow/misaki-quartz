## Solutions

1. How many matches did each player participate in?

```sql
SELECT
    CONCAT(players.first_name, " ", players.last_name) AS `Name`,
    COUNT(*) AS `Matches`
FROM
    players
    JOIN matches ON players.id = p1_id OR players.id = p2_id
GROUP BY
    players.id
ORDER BY
    `Matches` DESC;
```

2. What are the average points scored in May 2025?

```sql
SELECT ROUND(AVG(p1_score + p2_score), 2) AS 'Average Points (May 2025)'
FROM matches
WHERE match_date LIKE "2025-05-%";
```

3. Retrieve the complete names of players from the school `Kunahama Academy`.

```sql
SELECT CONCAT(p.first_name, ' ', p.last_name) AS full_name, s.school_name
FROM players p 
JOIN schools_players sp ON p.id = sp.player_id
JOIN schools s ON sp.school_id = s.id
WHERE school_name = 'Kunahama Academy';
```

4. Return the sum of all points ever scored in a match.

```sql
SELECT SUM(p1_score + p2_score) AS total_score FROM matches;
```

5. Find the maximum and minimum number points scored by either player across all matches.

```sql
SELECT MAX(GREATEST(p1_score, p2_score)) AS max_value, MIN(LEAST(p1_score, p2_score)) AS min_value FROM matches;
```

6. Return the first names of characters whose first names start with `M`.

```sql
SELECT first_name FROM players WHERE first_name LIKE "M%";
```

7. Return the complete name of the winners for all matches won by a player with an `All-Rounder` playstyle along with the date the match took place. The most recent matches should appear first.

```sql
SELECT CONCAT(p.first_name, ' ', p.last_name) AS winner_name, m.match_date FROM matches m
JOIN players p
ON p.id = m.p1_id OR p.id = m.p2_id
JOIN player_playstyles pps
ON p.id = pps.player_id
JOIN playstyles ps
ON pps.playstyle = ps.id
WHERE ps.playstyle_name = 'All-rounder' AND (
    pps.player_id = m.p1_id AND m.p1_score > m.p2_score OR
    pps.player_id = m.p2_id AND m.p1_score < m.p2_score
)
ORDER BY match_date DESC;
```

8. Return the number of wins for each school. Sort by descending order.

Using a `RIGHT JOIN`:

```sql
SELECT school_name, COUNT(*) AS wins FROM matches m
JOIN players p
ON p.id = m.p1_id OR p.id = m.p2_id
JOIN schools_players sp
ON p.id = sp.player_id
RIGHT JOIN schools s
ON sp.school_id = s.id
WHERE p.id = m.p1_id AND m.p1_score > m.p2_score
    OR p.id = m.p2_id AND m.p1_score < m.p2_score
GROUP BY school_name
ORDER BY wins DESC;
```

Using `LEFT JOIN`s (considered standard):

```sql
SELECT school_name, COUNT(*) AS wins FROM schools s
LEFT JOIN schools_players sp
ON s.id = sp.school_id
LEFT JOIN players p
ON sp.player_id = p.id
LEFT JOIN matches m
ON p.id = m.p1_id OR p.id = m.p2_id
WHERE p.id = m.p1_id AND m.p1_score > m.p2_score
    OR p.id = m.p2_id AND m.p1_score < m.p2_score
GROUP BY school_name
ORDER BY wins DESC;
```
<!--ID: 1728475797314-->

SELECT * FROM(
SELECT `playerfirstname`,`playerlastname`,`year`,`prevcollege1`
FROM `team_roster`
GROUP BY `playerfirstname`,`playerlastname` 
HAVING COUNT(*)<2 ORDER BY `year` DESC)t1 WHERE `year` = 2020; 
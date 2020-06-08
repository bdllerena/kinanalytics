# Reto3

Un SQL Fiddle fue creado para demostrar el resultado del reto 3

[SQL Fiddle](http://sqlfiddle.com/#!9/e2c7f87/2/0) - Resultado

```
SELECT * FROM(
SELECT `playerfirstname`,`playerlastname`,`year`,`prevcollege1`
FROM `team_roster`
GROUP BY `playerfirstname`,`playerlastname` 
HAVING COUNT(*)<2 ORDER BY `year` DESC)t1 WHERE `year` = 2020; 
```

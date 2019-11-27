SELECT
    Employee.name, Bonus.bonus
FROM
    Employee
        LEFT OUTER JOIN
    Bonus ON Employee.empid = Bonus.empid
    WHERE
    bonus < 1000 OR bonus IS NULL
;


select e.name, b.bonus
from Employee e
left join Bonus b
on e.empId = b.empId
where ifnull(b.bonus, 0) < 1000



SELECT
e.name,
b.bonus
FROM Employee e
LEFT JOIN Bonus b
ON e.empId = b. empId
WHERE COALESCE(b.bonus, 0) < 1000
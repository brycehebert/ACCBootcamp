SELECT e.first_name, d.department_name, l.city
FROM departments AS d
JOIN locations AS l
ON d.location_id = l.location_id
LEFT JOIN employees AS e 
ON e.department_id = d.department_id
WHERE l.city = 'Seattle';

SELECT 
    to_char(s.saledate, 'DD/MM/YYYY') AS "Sale Date", 
    p.description AS  "Product Name", 
    s.amount AS "Sale Amount"
FROM products p
JOIN sales s
ON p.productid = s.productid;

SELECT 
    fname || ' ' || lname AS "Name", 
    height, 
    weight AS "Weight (lbs)", 
    t.name AS "Team"
FROM players p
LEFT JOIN teams t
ON p.team_id = t.id;

SELECT 
    employee_id, first_name, last_name,
    email, job_id, manager_id, department_id
FROM employees;

SELECT 
    emp.first_name || ' ' || emp.last_name AS employee, 
    mgr.first_name || ' ' || mgr.last_name AS manager
FROM employees emp
JOIN employees mgr
ON emp.manager_id = mgr.employee_id;

SELECT 
    emp.first_name || ' ' || emp.last_name AS employee, 
    mgr.first_name || ' ' || mgr.last_name AS manager
FROM employees emp
LEFT JOIN employees mgr
ON emp.manager_id = mgr.employee_id;

SELECT 
    emp.first_name || ' ' || emp.last_name AS "Name",
    l.city
FROM departments d
JOIN locations l
ON l.location_id = d.location_id
RIGHT JOIN employees emp
ON emp.department_id = d.department_id;

INSERT INTO employees(
    employee_id,
    hire_date,
    first_name, 
    last_name,
    email,
    phone_numeric,
    job_id,
    salary,
    commission_pct,
    manager_id,
    department_id
    )
VALUES (
    42,
    CURRENT_DATE,
    'Bryce',
    'Hebert',
    'BHEBERT',
    '512-867-5309',
    'IT_PROG',
    450000,
    0.25,
    100,
    60
);

UPDATE employees 
SET phone_numeric = '5128675309'
WHERE employee_id = 42;
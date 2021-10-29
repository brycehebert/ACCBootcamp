SELECT * FROM countries;

SELECT country_id, region_id FROM countries;

SELECT
    country_name,
    region_id
FROM countries
WHERE region_id = 3 or region_id = 5;

SELECT DISTINCT 
    department_id,
    manager_id
FROM employees;

SELECT
    employee_id,
    last_name,
    salary,
    commission_pct
FROM employees
WHERE commission_pct IS NOT NULL
    OR (salary > 10000 AND hire_date > '31-Dec-98');

SELECT *
FROM employees
WHERE department_id = 80;

SELECT *
FROM employees
WHERE salary > 80000;

SELECT first_name, last_name
FROM employees
WHERE last_name LIKE 'K%'
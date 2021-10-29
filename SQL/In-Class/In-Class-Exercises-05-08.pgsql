SELECT COUNT(*)
FROM employees;

SELECT COUNT (DISTINCT manager_id)
FROM employees;

SELECT
    first_name,
    last_name,
    salary,
    commission_pct
FROM employees LIMIT 10;

SELECT 
    lname,
    COALESCE (team_id, 5)
FROM players;

SELECT
    first_name,
    last_name,
    salary,
    COALESCE (commission_pct + .1, 0.1),
    commission_pct
FROM employees;

SELECT
    last_name,
    MAX(salary)
FROM employees
GROUP BY (last_name);

SELECT MIN(salary)
FROM employees;

SELECT AVG(salary)
FROM employees;

SELECT 
    last_name,
    first_name,
    job_id,
    salary
FROM employees
ORDER BY 
    last_name, 
    first_name DESC;

SELECT *
FROM locations
ORDER BY 
    country_id, 
    postal_code DESC;

SELECT 'Hello ' || 'Dolly!';
SELECT SUBSTRING('Hello Dolly!' FROM 1 FOR 5);
SELECT CHAR_LENGTH('Hello Dolly!');
SELECT POSITION('ll' IN 'Hello Dolly!');

SELECT last_name || ', ' || first_name
FROM employees
ORDER BY last_name;

SELECT ROUND(453.141592, 4);
SELECT TRUNC(453.141592, 4);
SELECT ROUND(453.141592, -1);
SELECT TRUNC(453.141592, -1);
SELECT MOD(16,5) Remains;

SELECT 
    EXTRACT (year FROM hire_date),
    EXTRACT (month FROM hire_date),
    EXTRACT (day FROM hire_date)
FROM employees
WHERE employee_id = 200;

SELECT 
    last_name || ', ' || first_name AS "Full Name",
    EXTRACT (year FROM hire_date) AS "Year Hired",
    CASE 
        WHEN EXTRACT(year FROM hire_date) < 2001 
            THEN 'Senior Employee'
        WHEN EXTRACT(year FROM hire_date) BETWEEN 2001 AND 2007 
            THEN 'Mid Employee'
        WHEN EXTRACT(year FROM hire_date) > 2007 
            THEN 'Junior Employee'
        ELSE 'Unknown'
    END AS "Seniority"
FROM employees; 
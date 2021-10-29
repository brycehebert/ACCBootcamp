------------
-- TASK 1 --
------------

-- Please find all employees that have a salary greater than 3000 and less than 4000
    
    -- using AND operator
    SELECT first_name || ' ' || last_name AS "Full Name", salary
    FROM hr.employees
    WHERE salary > 3000 AND salary < 4000;

    -- using BETWEEN operator
    SELECT first_name || ' ' || last_name AS "Full Name", salary
    FROM hr.employees
    WHERE salary BETWEEN 3000 AND 4000;

------------
-- TASK 2 --
------------

-- List the employees whose last name is longer than 6 characters.
SELECT first_name || ' ' || last_name AS "Full Name"
FROM hr.employees
WHERE length(last_name) > 6;

-- In this query, return the first 6 characters of their last names, the jobs they perform and their salary.
SELECT 
    first_name || ' ' || last_name AS "Full Name",
    SUBSTRING(last_name, 1, 6) AS "First 6 of Last Name",
    job_id,
    salary
FROM hr.employees;

------------
-- TASK 3 --
------------

-- Please find all employees that have a salary greater than 8000, and those hired after 1996 (use implicit conversion of a date as a string to the DATE type).
SELECT 
    first_name || ' ' || last_name AS "Full Name", 
    to_char(hire_date, 'Mon/DD/YYYY') AS "Hire Date", 
    salary
FROM hr.employees
WHERE salary > 8000 OR EXTRACT(YEAR FROM hire_date) > 1996;

-- Create a separate query to find the lowest salary in the company (look for a SQL math function from references or Google search which allows you find the minimum in a set or a column).
SELECT
    first_name || ' ' || last_name AS "Full Name", 
    salary
FROM hr.employees
WHERE salary = 
    (SELECT MIN(salary) 
    FROM employees);

-- In the first query you wrote above, please also report the employee's total compensation (salary + commission, if any) as a percentage of the minimum salary in the company from the #2 above.
SELECT 
    first_name || ' ' || last_name AS "Full Name", 
    to_char(hire_date, 'Mon/DD/YYYY') AS "Hire Date", 
    ROUND(COALESCE(salary + salary * commission_pct, salary) / (SELECT MIN(salary) FROM employees)) * 100 || '%' AS "Percent of Min Comp"
FROM hr.employees
WHERE salary > 8000 OR EXTRACT(YEAR FROM hire_date) > 1996;

------------
-- TASK 4 --
------------

-- List the full names and their department names of the all employees in the "bootcamp" database.
-- Order the results by hiring date with the most recent hires at the top.
SELECT 
    first_name || ' ' || last_name AS "Full Name",
    TO_CHAR(hire_date, 'Mon/DD/YYYY') AS "Hire Date",
    department_name AS "Department Name"
FROM hr.employees emp
LEFT JOIN hr.departments dep
ON emp.department_id = dep.department_id
ORDER BY hire_date DESC;

-- Do the same for the employees that work for department "Sales".
-- Order the results by hiring date with the most recent hires at the top.
SELECT 
    first_name || ' ' || last_name AS "Full Name",
    TO_CHAR(hire_date, 'Mon/DD/YYYY') AS "Hire Date",
    department_name AS "Department Name"
FROM hr.employees emp
JOIN hr.departments dep
ON emp.department_id = dep.department_id
WHERE dep.department_name = 'Sales'
ORDER BY hire_date DESC;

------------
-- TASK 5 --
------------

-- List the first, last, email, department name and city of all employees that are Execs.
SELECT 
    first_name AS "First",
    last_name AS "Last",
    email AS "Email",
    dep.department_name AS "Department",
    loc.city AS "City"
FROM hr.employees emp
JOIN hr.departments dep
ON emp.department_id = dep.department_id
JOIN hr.locations loc
ON dep.location_id = loc.location_id
WHERE emp.department_id = 90;

------------
-- TASK 6 --
------------

-- To the above query, add the manager's first name to the column list.
SELECT 
    emp.first_name AS "First",
    emp.last_name AS "Last",
    emp.email AS "Email",
    dep.department_name AS "Department",
    man.first_name || ' ' || man.last_name AS "Manager",
    loc.city AS "City"
FROM hr.employees emp
LEFT JOIN hr.employees man
ON emp.manager_id = man.employee_id
LEFT JOIN hr.departments dep
ON emp.department_id = dep.department_id
LEFT JOIN hr.locations loc
ON dep.location_id = loc.location_id
WHERE emp.department_id = 90;

-- Make changes so that all employees are listed.
SELECT 
    emp.first_name AS "First",
    emp.last_name AS "Last",
    emp.email AS "Email",
    dep.department_name AS "Department",
    man.first_name || ' ' || man.last_name AS "Manager",
    loc.city AS "City"
FROM hr.employees emp
LEFT JOIN hr.employees man
ON emp.manager_id = man.employee_id
LEFT JOIN hr.departments dep
ON emp.department_id = dep.department_id
LEFT JOIN hr.locations loc
ON dep.location_id = loc.location_id;

------------
-- TASK 7 --
------------

-- Find out how many employees were hired in each year. List years and counts of employees hired in those years.
SELECT 
    EXTRACT (YEAR FROM hire_date) AS "Hire Year",
    COUNT (EXTRACT (YEAR FROM hire_date)) AS "Number Hired"
FROM hr.employees
GROUP BY EXTRACT (YEAR FROM hire_date)
ORDER BY EXTRACT (YEAR FROM hire_date);

-- Then leave out those who years where less than 2 employees were hired, while ordering the results chronologically.
SELECT 
    EXTRACT (YEAR FROM hire_date) AS "Hire Year",
    COUNT (EXTRACT (YEAR FROM hire_date)) AS "Number Hired"
FROM hr.employees
GROUP BY EXTRACT (YEAR FROM hire_date)
HAVING COUNT(EXTRACT (YEAR FROM hire_date)) >= 2
ORDER BY EXTRACT (YEAR FROM hire_date);
Select now();

SELECT CURRENT_DATE + INTERVAL '7' MONTH AS "Date 7 Months from Today";

SELECT 
    TO_CHAR(CURRENT_DATE + INTERVAL '7' MONTH, 'DD-Mon-YYYY') 
AS "Date 7 Months from Today";

SELECT CURRENT_DATE - '06/27/1991';

SELECT 
    first_name, 
    last_name, 
    TO_CHAR(salary + COALESCE(salary*commission_pct, 0), '$99,999,999') AS "Comp"
FROM employees;

SELECT first_name || ' ' || last_name AS "Full Name"
FROM employees
WHERE upper(last_name) = upper('King');

SELECT first_name || ' ' || last_name AS "Full Name"
FROM employees
WHERE upper(last_name) LIKE upper('K%');

SELECT 
    employee_id, 
    first_name
FROM employees
WHERE salary >= 
    (SELECT AVG(salary)
    FROM employees);

SELECT department_name
FROM departments
WHERE location_id IN 
    (SELECT location_id
    FROM locations 
    WHERE country_id = 'UK');

SELECT first_name || ' ' || last_name AS "Full Name"
FROM employees
WHERE department_id IN (
    SELECT department_id
    FROM departments
    WHERE location_id IN (
        SELECT location_id
        FROM locations
        WHERE city = 'Seattle'
    )
);

SELECT p.productid, p.description, s.saledate, s.amount
FROM sales s
JOIN products p
ON p.productid = s.productid;


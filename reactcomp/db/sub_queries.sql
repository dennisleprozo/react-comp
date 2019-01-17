SELECT * FROM Customer; 
SELECT CustomerId FROM Customer WHERE PostalCode = 1010;

-- subquery
SELECT * FROM Customer
WHERE CustomerId in (SELECT CustomerId FROM Customer WHERE PostalCode = 1010);

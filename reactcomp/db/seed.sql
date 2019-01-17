CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City text,
    CashOnHand float,
    CashOnBank decimal
);

ALTER TABLE Persons 
RENAME COLUMN PersonID TO Person_id;

CREATE
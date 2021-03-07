-- this assumes the database project3 already exists and we're running
-- in a connection already using it.
/* not finished */

INSERT INTO Users
(username, email, firstName, lastName, password)
values('SomeGuy1', 'someguy1@gmail.com', 'Some', 'Guy','password1234'),
('SomeGal1', 'somegal1@gmail.com', 'Some', 'Gal', 'password555'),
('SomeGal2', 'somegal2@gmail.com', 'Some', 'Gal', 'password111');

-- The password for yetanotherguy is a salted&encrypted 'password1234'

INSERT INTO Users
(username, isDeveloper, email, firstName, lastName, password)
values('yetanotherguy', 1, 'yetanotherguy@gmail.com', 'Another', 'Guy', '$2a$10$hu2/j4Iyyp7MTs52B3XuVO3TzujkeJFjPSy8YFklChaejUJc1YYJ6');


CREATE DATABASE pets;

USE pets;

CREATE TABLE dogs (ID int NOT NULL, name VARCHAR(20), owner VARCHAR(20), PRIMARY KEY (ID));


SHOW TABLES;

DESCRIBE dogs;

DROP TABLE dogs;



// drop column id in dogs table 
ALTER TABLE dogs DROP COLUMN ID;

// modified column id as integer and automatically increment whenver new thing gets added 
alter table dogs add column `id` int(10) unsigned primary KEY AUTO_INCREMENT;

// update fields 
UPDATE dogs
SET name = "Krane"
WHERE name = "Loki";


// create reference of foreign key to another table 
ALTER TABLE messages ADD FOREIGN KEY (`name`) REFERENCES users(`ID`);

// drops a column 
ALTER TABLE messages DROP COLUMN name;



// Inserting values to tables 
INSERT INTO 
 users(name)
VALUES
 ('Loki');
 
 INSERT INTO 
 rooms(roomname)
VALUES
 ('Lobby');
 


 // modified table column null -> VARCHAR
 ALTER TABLE messages MODIFY created_at VARCHAR(255);
 ALTER TABLE messages MODIFY roomID VARCHAR(255);
 
// insert in messages table two foreign keys 
INSERT INTO messages (user_id, room_id)
SELECT users.id, rooms.id
FROM users AS users
CROSS JOIN rooms AS rooms
WHERE users.`name` = 'Loki'
AND rooms.`roomname` = 'lobby';

// Update existing field where foreign ID is something specific
UPDATE messages SET text = 'hello world' WHERE userID = 1;



//command to add a user
curl -XGET localhost:3000/classes/messages


UPDATE users
SET name = NULL
WHERE name is not null;

 delete from users where name = 'sung';
 

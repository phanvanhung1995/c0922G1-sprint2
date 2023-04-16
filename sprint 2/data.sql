create database reputation_job;
use reputation_job;
create table role (
id int primary key auto_increment,
name varchar(25)
);

create table account(
id bigint primary key auto_increment,
password varchar(225)
);

create table account_role (
id bigint  primary key auto_increment,
id_role int,
id_account bigint ,
foreign key (id_role) references `role`(id),
foreign key (id_account) references `account`(id)
);

CREATE TABLE employer (
   employer_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   employer_name VARCHAR(255),
   employer_email VARCHAR(255),
   employer_phone VARCHAR(20),
   employer_address TEXT
);

CREATE TABLE job (
   job_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   job_title VARCHAR(255),
   job_description TEXT,
   job_location VARCHAR(255),
   job_salary DECIMAL(10,2),
   job_posted_date DATE,
  account_id bigint,
  employer_id INT,
foreign key (account_id) references `account`(id),
foreign key (employer_id) references `employer` (employer_id)
);


CREATE TABLE position (
   position_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   position_name VARCHAR(255)
);


CREATE TABLE cart (
   cart_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   quantity INT,
   date_added DATE
);

CREATE TABLE education (
   education_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   education_name VARCHAR(255)
);

CREATE TABLE oder (
oder_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
candidate_id INT,
cv_id INT
);

CREATE TABLE candidate (
   candidate_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   candidate_name VARCHAR(255),
   candidate_email VARCHAR(255),
   candidate_phone VARCHAR(20),
   candidate_skills TEXT,
   candidate_education VARCHAR(255),
   oder_id INT,
   education_id INT,
    foreign key (oder_id) references `oder`(oder_id),
    foreign key (education_id) references `education`(education_id)
);

CREATE TABLE cv (
   cv_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   cv_name VARCHAR(255),
   cv_description TEXT,
   cv_file_path VARCHAR(255),
   cv_price DECIMAL(10,2),
   cart_id INT,
   job_id INT,
   position_id INT,
   oder_id INT,
   foreign key (cart_id) references `cart`(cart_id),
   foreign key (job_id) references `job`(job_id),
    foreign key (position_id) references `position`(position_id),
   foreign key (oder_id) references `oder`(oder_id)
);



-- User
CREATE TABLE if NOT EXISTS userAdmin (
    id SERIAL PRIMARY KEY,
    fname VARCHAR(50) NOT NULL,
    lname VARCHAR(50) NOT NULL,
    email TEXT UNIQUE,
    password TEXT NOT NULL
);

-- Us
CREATE TABLE if NOT EXISTS us (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    text TEXT NOT NULL,
    image TEXT,
    active BOOLEAN
);

-- Season
CREATE TABLE if NOT EXISTS season (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL
);

-- Plant
CREATE TABLE if NOT EXISTS plant (
    id SERIAL PRIMARY KEY,
    image TEXT NOT NULL,
    name VARCHAR(100) NOT NULL,
    text TEXT NOT NULL,
    season_id INT,
    FOREIGN KEY (season_id) REFERENCES season(id)
);

-- Catalogue
CREATE TABLE if NOT EXISTS catalogue (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100)
);

-- Catalogue Plant
CREATE TABLE if NOT EXISTS catalogue_plant (
    catalogue_id INT,
    plant_id INT,
    FOREIGN KEY (catalogue_id) REFERENCES catalogue(id),
    FOREIGN KEY (plant_id) REFERENCES plant(id),
    PRIMARY KEY (catalogue_id, plant_id)
);

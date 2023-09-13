/* Replace with your SQL commands */
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email varchar(60) UNIQUE,
    password varchar(60),
    created_at timestamptz DEFAULT NOW(),
    updated_at timestamptz DEFAULT NOW()
)
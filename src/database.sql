CREATE DATABASE pernstack;

CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);

CREATE TABLE user(
  id SERIAL PRIMARY KEY,
  username varchar(255) not null,
  password VARCHAR(255) not null
);

CREATE TABLE posts(
  id serial primary key,
  title text not null,
  body text default '...',
  creator_id int references users(id) not null,
  votes
);

CREATE TABLE comment(
  id SERIAL PRIMARY KEY,
  message text not null,
  post_id int references posts(id),
  creator_id int references user(id)
);


create table favorites(
   user_id int references users(id),
   post_id int references posts(id),
   primary key (user_id, post_id) -- composite key
);
# Schema Information

## Decks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
Name        | string    | not null
description | text      | not null
owner_id    | integer   | not null, foreign key (references users), indexed
review_dates| date      | not null,


## Flashcards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
deck_id     | integer   | not null, foreign key (references decks), indexed
front       | string    | not null
back        | string    | not null
grade       | float     | not null
review_total| integer   | not null

## PublicDecks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
Name        | string    | not null
description | text      | not null

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

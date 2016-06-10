# AnkiClone

Check out a live version of AnkiClone here:
[AnkiClone Live][heroku]

[heroku]: https://anki-clone.herokuapp.com/#/auth?_k=2sv0x7

AnkiClone is a clone of the website AnkiApp, a flashcard application. The
backend of AnkiClone is built on rails with a PostgreSQL database. Frontend
rendering is handled with React. Flux architecture is used to manage data on the
frontend.

## Features & Implementation

### Single-Page App

*React router and components*

AnkiClone is a single page app. All “pages” are rendered at a root url “/” by a
collection of shuffling react components. The React router handles the logic
associated with component navigation and updates an addendum to the root route.
Re-rendering of child components is done through the React API.

*Frontend and Backend Interaction*

AnkiClone server interactions are limited to retrieval of data from and
modification of the database. The front end stores the necessary information for
rendering upon site entry. Other requests are made on a “need to know” basis by
various React components. This minimizes info passed between the frontend
and backend and allows for speedy re-rendering handled by React.

###Authentication

*Normal Authentication*

Users of the site are required to authenticate or sign up. Navigation to any
other section of the site before authentication will redirect back to auth. The
user model requires a unique username and password (not necessarily unique) for
sign up. Upon account creation, user passwords are digested using the B-Crypt
gem before being stored. Authentication uses B-Crypt to match passwords to
password digests.

*Omniauth*

AnkiClone also supports authentication through Facebook. Authentication with
Facebook is handled with the Omniauth and Devise gems. Users who sign up with
Facebook are stored in the database with a Facebook unique identifier (provided
by Facebook through omni auth). This identifier is used for user after future
logins through Facebook.

###Flashcard & Deck CRUD

*Attributes*

Decks and Flashcards are the most important Models of this application. All app
utility centers around them.

The deck table has columns for `name`, `description`, `owner_id`, and
`review_total`. `name` and `description` are string identifiers for users in the
application interface. The owner_id is a foreign key that points to the
associated deck owner (a user). `review_total` tracks the total number of times
a deck has been reviewed.

Flashcards consist of a `front`, `back`, `deck_id`, `review_total`, and `grade`.
`front` is a string holding the concept a user will review and `back` holds the
information that a user will memorize. `deck_id` is a foreign key pointing to
the deck a flashcard belongs to. This key also indirectly associates the card
with the deck owner. `review_total` stores the total number of times a flashcard
has shown up in a deck review.

*CRUD and flux architecture*

AnkiClone lets users create, read, update, and destroy decks/flashcards.
React components exist for each corresponding action in the app. Information
needed for all components or user actions performed on a subcomponent are
managed with flux cycles. Click the following link for specifics on the
corresponding flux cycles:

[Flux Cycles][flux-cycles]
[flux-cycles]: ./docs/flux-cycles.md

###Reviews

Besides storing decks and flashcards, AnkiClone also lets users review/practice
with their decks. This app has an intelligent review system that lets users both
review quickly and track how well they are doing, adjusting card draws such
that the user gets extra practice with cards they struggle with. Here is a
breakdown of how the review system works:

**Review Phase 1: Draw cards**

When the user presses the review button at the bottom of the deck show page, they
are redirected to the review component. After the component mounts, a call is
made by the Flashcard Actions object to obtain all
flashcards corresponding to the deck from the server and send them to the
Flashcard store. When the store receives the cards, it then draws ten cards and
gives them to the review component per a callback placed in the store by the
Review component. The protocol for drawing cards is as follows:

1. Draw up to 10 cards randomly with grade in the lowest grade range not yet
   visited.
2. If the number of cards in this range is equal to or greater than 10, return
   the drawn cards to the review component. Else, repeat step 1).
3. If you have not already returned (i.e. there are less than 10 cards in the
   deck, return whatever has been drawn so far).

Grade ranges are mapped as follows:

 * [0, 50)   => F
 * [50, 60)  => E
 * [60, 70)  => D
 * [70, 80)  => C
 * [80, 90)  => B
 * [90, 100] => A

**Phase 2: Reviews and the Grade Report**
Once the review component has the cards, it then lets the user flip through each
card and grade their guessing performance. In order from left to right,
the four grading buttons correspond to a review grade of 0, 35, 75, 100. As the
user flips through the ten cards, AnkiClone compiles a report to be sent to the
reviews controller upon finish or early termination of the review.

**Phase 3: Calculate New Grades**
Once the review report is sent, the controller updates each of the flashcards in
the report by the following protocol:

IF (flashcard.review_grade > flashcard.current_grade)
  => New grade = 0.85 * (old grade) + 0.15 * (new grade)
ELSE
  => New Grade = 0.15 * (old grade) + 0.85 * (new grade)

This weighting scheme ensures that cards for which a users guesses poorly will
quickly drop in grade. That grade is then only built up slowly upon correct
guesses, meaning the Review component is more likely to draw it in further
reviews.

Once the review is finished, the controller sends the adjusted cards back to the
frontend so that the flashcard store can update its flashcards.

###Review Model

There is a table in the AnkiClone database for reviews. The table has columns
for deck_id (each review belongs to a deck) and timestamps. The purpose of this
table is to provide review frequency info for the dashboard bar graph and
the deck show history section. This is the only purpose of this table. Upon
login, a request is made to the review controller that fetches all of the
reviews for the front end *after* deleting all reviews from the table over a
week old. All other stats are taken directly from a stored attribute on a
flashcard/ deck instance, or are calculated indirectly through database
queries followed by some data manipulation.

###Deck Importing

The last feature implemented in AnkiClone is public deck importing. On the
public deck browser page, users can type in queries and search for decks by name.
Each new letter typed into the search bar makes a get request through the public
deck flux cycle to the database for all matching decks. Users can then see a
preview of the deck by clicking on it in the browser. Clicking the download on
the following page downloads the deck. For this project, importing simply copies
a deck from the public deck table (a lighter version of the normal deck
model) into the decks table with the appropriate owner_id. The corresponding
public flashcards are also copied over to the flashcard table.

##New Features Queue

Some features missing from this iteration of AnkiClone that will hopefully see
implementation at a future date include:

* User profile modification
* Direct deck exchange between users
* Fancy text editing for flashcards
* Timed grading (users will also graded on how long it takes to guess a card)
* Larger Public Deck DataBase with an infinite scroll in the deck browser.

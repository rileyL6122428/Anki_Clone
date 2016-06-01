# FresherNote

[Heroku link]

[heroku]: https://anki-clone.herokuapp.com/#/auth?_k=2sv0x7

## Minimum Viable Product

Anki is a clone of AnkiApp, a flashcard app. The mvp of this project includes the following:

- [ ] New account creation, login, and guest/demo login
- [ ] Smooth, bug-free navigation
- [ ] Adequate seed data to demonstrate the site's features
- [ ] The minimally necessary features for an AnkiApp-inspired site:
      -  1) deck and flashcard creation
      -  2) D&F editing
      -  3) D&F viewing (with stat lists and graphs)
      -  4) D&F deleting
      -  5) Deck reviews with recaps
      -  6) browse and import public decks.
      -  7) add audio to flashcards (not MVP)
      -  8) add tagging to decks (not MVP)
      -  9) add fancy text editing for flashcards (not MVP)
      -  10) add keyboard shortcuts to website (not MVP)
- [ ] Hosting on Heroku
- [ ] CSS styling that is satisfactorily visually appealing
- [ ] A production README, replacing this README (**NB**: check out the [sample production README](https://github.com/appacademy/sample-project-proposal/blob/master/docs/production_readme.md) -- you'll write this later)

## Product Goals and Priorities

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->
  See numbered list in MVP

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/my_wireframes
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days) Total (days thus far): .5

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Deck & Flashcard Model, API, and basic APIUtil (1.5 days) Total: 2

**Objective:** Decks and flashcards can be created, read, edited and destroyed
through the API.

- [ ] create `Deck` & `Flashcard` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for Decks & Flashcards (`DecksController` & `FlashcardsController`)
- [ ] jBuilder views for Decks & Flashcards
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (2.5 days) Total: 4.5

**Objective:** Flashcards and Decks can be created, read, edited and destroyed
with the user interface. Also, user can visit the dashboard and profile.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
      implement following components, building out the flux loop as needed.
  - [ ] `Dashboard`
  - [ ] `user info`
  - [ ] `Dashboard footer`

  - [ ] `profile component`

  - [ ] `DecksIndex`
  - [ ] `DecksIndex search bar` (not functional yet)
  - [ ] `DecksIndexItem`

  - [ ] `Deck Show`
  - [ ] `Deck info`
  - [ ] `Deck Stats` (basic, without graphs)
  - [ ] `Deck Options`

  - [ ] `New Deck form`

  - [ ] `New Card Form`
  - [ ] `form info`
  - [ ] `card preview`

  - [ ] `cards index`
  - [ ] `search bar` (not functional yet)
  - [ ] `cards index`
  - [ ] `cards index item`

  - [ ] `card show`

### Phase 4: Create Deck Review (1.5 day) Total: 6

**Objective** User can initiate reviews through interface and stats on reviews
are accurately tracked

- build out Deck API, Flux loop (including the weighting system for card draws),
  and the following components:
  - [ ] Review Card front
  - [ ] Review Card back
  - [ ] Review Card recap
- test interface

### Phase 5: Create Public Deck Browser and Import (1 day) Total: 7

**Objective** Users can browse through public decks and import public decks into
their decks. Also, all three search bars in the app function.

- build out Deck API, Flux loop and the following components:
  - [ ] Public Decks
  - [ ] Deck search bar
  - [ ] DeckSearchResults
  - [ ] DeckSearchResultsItem
  - [ ] DeckDownload
  - [ ] DeckSample
  - [ ] Info
  - [ ] Download Button

  - [ ] previouw 2 search bars (deck index and cards index)
- test interface


### Phase 6: Styling (2 days) Total: 9

**Objective:** Existing pages (including singup/signin) will look like Anki App.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles
- [ ] create graphs using canvas

### Phase 7: Graphs and seeding (1 day) Total: 10

**Objective** Graphs of review stats are inserted in the proper place and
data is seeded to appropriatly show the features of the application

- [ ] Create stat graphs using canvas and insert them on the appropriate pages
- [ ] Porperly seed data

### Bonus Features (TBD)
- [ ] Deck tagging
- [ ] Pagination / infinite scroll for Public decks and flashcards
- [ ] Able to add audio to cards
- [ ] Fancy text editing for flashcards
- [ ] Add keyboard shortcuts for Deck reviews
- [ ] Extra graph info

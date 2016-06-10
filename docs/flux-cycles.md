# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

## Deck Cycles

### Decks API Request Actions

*NOTE*: `comp1` < `comp2` denotes `comp1` as a subcomponent of `comp2`

* `fetchDecks`
  0. invoked from `DeckIndex` on `didMount`
  0. `GET /api/decks` is called.
  0. `deckStoreCB` is set as the store callback. `deckStoreCB` contains method
      calls to receive all decks from the
      deck store.

* `fetchADeck`
  0. invoked from `Content` < `DeckShow` on `didMount`
  0. `Get /api/decks/:id` is called.
  0. `storeCB` is set as the callback. `storeCB` contains a method call to
     `DeckStore#find`.

* `createDeck`
  0. invoked from save button in `Form` < `NewDeck` on `onClick`
  0. `POST /api/decks` is called.
  0. user is redirected to deck show upon successful save.

* `updateDeck`
  0. invoked from save button n `Form` < `DeckEdit` on `onSubmit`
  0. `PATCH /api/decks` is called.
  0. user is redirected to deck show upon successful save.

* `destroyNote`
  0. invoked from delete Deck button `onClick` in `DeckShow`
  0. `DELETE /api/Decks/:id` is called.
  0. user is redirected to the dashboard.

### Decks API Response Actions

* `receiveDecks`
  0. invoked from an API callback.
  0. `Deck` store updates `_decks` and emits change.

* `receiveDeck`
  0. invoked from an API callback.
  0. `Deck` store updates `_decks[id]` and emits change.

* `removeDeck`
  0. invoked from an API callback.
  0. `Deck` store removes `_decks[id]` and emits change.

### Store Listeners

* `DeckIndex`, `DeckShow`, and `Review` listen to `DeckStore`.


## Flashcard Cycles

### Flashcards API Request Actions

* `fetchFlashcards`
  0. invoked from `FlashcardIndex` & `Review` on `didMount`
  0. `GET /api/decks/:id/flashcards` is called.
  0. `receiveFlashcards` is set as the callback.

* `fetchAFlashcard`

  *Note*: pending, will be implemented in flashcard show

* `createFlashcard`
  0. invoked from `Form` < `NewFlashcard` save button on `onClick`
  0. `POST /api/decks/:id/flashcards` is called.
  0. `flashcardStoreCB` (containing a 'clear state' call for the form)
      is set as the callback.

* `destroyFlashcard`
  0. invoked from `ShowFlashcard` delete button `onSubmit`
  0. `DELETE /api/flashcards/:id` is called.
  0. user is redirected to the dashboard.

* `editFlashcard`
  0. invoked from save button in EditFlashcards `onClick`
  0. `DELETE /api/notebooks/:id` is called.
  0. `receiveFlashcard` is set as the callback.

### Flashcards API Response Actions

* `receiveAllFlashcards`
  0. invoked from an API callback.
  0. `Flashcard` store updates `_flashcards` and emits change.

* `receiveFlashcard`
  0. invoked from an API callback.
  0. `Flashcard` store updates `_flashcards[id]` and emits change.

* `removeFlashcard`
  0. invoked from an API callback.
  0. `Flashcard` store removes `_flashcards[id]` and emits change.

### Store Listeners

* `Review`, `FlashcardIndex`, `FlashcardShow` components listens to
  the `FlashcardStore`.


## PublicDeckBrowser Cycles

* `search`
  0. invoked from `PublicDeckSearchBar` `onChange` when there is text
  0. `GET /api/public_decks` is called with `text` param.
  0. `deckStoreCB` with a call of 'set state to decks'
     is set as the callback.

* `fetch`
  0. invoked from click on an index item in `DeckIndex` < `PublicDeckBrowser`.
  0. `GET /api/public_decks/:id` is called with `id` params
  0. `PublicDeck` store updates `_publicDecks` and emits change.

* `downloadDeck`
  0. invoked from `PublicDeckPreview` save button `onClick`
  0. User is redirected to deck Show

### Store Listeners

* `PublicDeckBrowser` listens to `PublicDeckStore` store.


## Review Cycles

### Review API Request Actions

* `logReview`
  0. invoked from Review finish or early termination
  0. `POST /api/reviews` is called.
  0. CBs are placed with DeckStore and FlashcardStore to update state is set as
     the callback.

* `fetchReviews`
  0. invoked upon entering `Dashboard`
  0. `GET /api/reviews` is called
  0. `reviewStoreCB` containing a set state call is set as the callback.

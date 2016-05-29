# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

## Deck Cycles

### Decks API Request Actions

* `fetchAllDecks`
  0. invoked from `DeckIndex` `didMount`
  0. `GET /api/decks` is called.
  0. `receiveAllDecks` is set as the callback.

* `createDeck`
  0. invoked from save Deck button `onClick`
  0. `POST /api/decks` is called.
  0. `receiveSingleDeck` is set as the callback.

* `updateDeck`
  0. invoked from `DeckEdit` `onSubmit`
  0. `POST /api/decks` is called.
  0. `receiveSingleDeck` is set as the callback.

* `destroyNote`
  0. invoked from delete Deck button `onClick`
  0. `DELETE /api/Decks/:id` is called.
  0. `removeDeck` is set as the callback.

### Decks API Response Actions

* `receiveAllDecks`
  0. invoked from an API callback.
  0. `Deck` store updates `_decks` and emits change.

* `receiveSingleDeck`
  0. invoked from an API callback.
  0. `Deck` store updates `_decks[id]` and emits change.

* `removeDeck`
  0. invoked from an API callback.
  0. `Deck` store removes `_decks[id]` and emits change.

### Store Listeners

* `DeckIndex` component listens to `Deck` store.
* `UserInfo (on dashboard)` component listens to `Deck` store.


## Flashcard Cycles

### Flashcards API Request Actions

* `fetchFlashcards`
  0. invoked from `FlashcardIndex` `didMount`
  0. `GET /api/decks/:id/flashcards` is called.
  0. `receiveFlashcards` is set as the callback.

* `createFlashcard`
  0. invoked from NewFlashcard save button `onClick`
  0. `POST /api/decks/:id/flashcards` is called.
  0. `receiveFlashcard` is set as the callback.

* `deleteFlashcard`
  0. invoked from `ShowFlashcard` delete button `onSubmit`
  0. `DELETE /api/flashcards/:id` is called.
  0. `removeFlashcard` is set as the callback.

* `updateFlashcard`
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

* `DeckShow`, `FlashcardIndex`, `FlashcardShow` components listens to `Notebook` store.


## PublicDeckSearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `PublicDeckSearchBar` `onChange` when there is text
  0. `GET /api/public_decks` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `NoteSearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `PublicDeckSearchBarSuggestions` component listens to `SearchSuggestion` store.


## Review Cycles

### Review API Request Actions

* `updateGrades`
  0. invoked from Review finish
  0. `POST /api/decks/:id/review` is called.
  0. `reviewUpdate` is set as the callback.

### Review API Request Actions

* `reviewUpdate`
  0. invoked from Api callback
  0. Deckstore increments review count of `_decks[id]` and emits change AND
     reviewed cards have their grades updated & emit change is called

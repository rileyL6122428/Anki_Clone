# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Decks

- `GET /api/decks`
- `POST /api/decks`
- `GET /api/decks/:id`
- `PATCH /api/decks/:id`
- `DELETE /api/decks/:id`

### Flashcards

- `GET /api/decks/:id/flashcards`
- `POST /api/decks/:id/flashcards`
- `GET /api/decks/:id/flashcards/:id`
- `PATCH /api/decks/:id/flashcards/:id`
- `DELETE /api/decks/:id/flashcards/:id`
- `GET /api/decks/:id/flashcards/:id/notes`

### Review

- `POST /api/decks/:id/review`

### PublicDecks

- `GET /api/publicDecks`
- `Get /api/publicDecks/:id

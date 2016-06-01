var FlashcardApiUtil = require('../util/flashcard_api_util');
module.exports = {
  fetchFlashcards: function (deckId) {
    FlashcardApiUtil.fetchFlashcards(deckId);
  },

  fetchAFlashcard: function (id) {
    FlashcardApiUtil.fetchAFlashcard(id);
  },

  createFlashcard: function (flashcard, deckId) {
    FlashcardApiUtil.createFlashcard(flashcard, deckId);
  },

  editFlashcard: function (flashcard) {
    FlashcardApiUtil.editFlashcard(flashcard);
  },

  destroyFlashcard: function (id) {
    FlashcardApiUtil.destroyFlashcard(id);
  }
};

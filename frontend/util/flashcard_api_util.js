var AppDispatcher = require('../dispatcher/dispatcher');
var FlashcardConstants = require('../constants/flashcard_constants');

module.exports = {
  fetchFlashcards: function(deckId) {
    $.ajax({
      url: "/api/decks/" + deckId + "/flashcards",
      type: "GET",
      success: function (flashcards) {
         AppDispatcher.dispatch({
          actionType: FlashcardConstants.RECEIVE_FLASHCARDS,
          flashcards: flashcards
        });
      }
    });
  },

  fetchAFlashcard: function(id) {
    $.ajax({
      url:'api/flashcards/' + id,
      type: 'GET',
      success: function (flashcard) {
        AppDispatcher.dispatch({
          actionType: FlashcardConstants.RECEIVE_FLASHCARD,
          flashcard: flashcard
        });
      }
    })
  },

  createFlashcard: function(flashcard, deckId) {
    $.ajax({
      url:'api/flashcards',
      type:'POST',
      data: { flashcard: flashcard, deck_id: deckId },
      success: function(flashcard){
        AppDispatcher.dispatch({
          actionType: FlashcardConstants.RECEIVE_FLASHCARD,
          flashcard: flashcard
        })
      }
    });
  },

  editFlashcard: function (flashcard) {
    $.ajax({
      url:'api/flashcards/' + flashcard.id,
      type:'PATCH',
      data: { flashcard: flashcard },
      success: function(flashcard){
        AppDispatcher.dispatch({
          actionType: FlashcardConstants.RECEIVE_FLASHCARD,
          flashcard: flashcard
        })
      }
    });
  },

  destroyFlashcard: function (id) {
    $.ajax({
      url:'api/flashcards/' + id,
      type: 'DELETE',
      success: function (flashcard) {
        AppDispatcher.dispatch({
          actionType: FlashcardConstants.REMOVE_FLASHCARD,
          flashcard: flashcard
        });
      }
    })
  }
};

var DeckConstants = require('../constants/deck_constants');
var AppDispatcher = require('../dispatcher/dispatcher');

module.exports = {
  fetchDecks: function() {
    $.ajax({
      url: "/api/decks",
      type: "GET",
      success: function (decks) {
        AppDispatcher.dispatch({
          actionType: DeckConstants.RECEIVE_DECKS,
          decks: decks
        });
      }
    });
  },

  fetchADeck: function(id) {
    $.ajax({
      url:'api/decks/' + id,
      type: 'GET',
      success: function (deck) {
        AppDispatcher.dispatch({
          actionType: DeckConstants.RECEIVE_DECK,
          deck: deck
        });
      }
    })
  },

  createDeck: function(deck) {
    $.ajax({
      url:'api/decks',
      type:'POST',
      data: { deck: deck },
      success: function(deck){
        AppDispatcher.dispatch({
          actionType: DeckConstants.RECEIVE_CREATED_DECK,
          deck: deck
        })
      }
    });
  },

  editDeck: function (deck) {
    $.ajax({
      url:'api/decks/' + deck.id,
      type:'PATCH',
      data: { deck: deck },
      success: function(deck){
        AppDispatcher.dispatch({
          actionType: DeckConstants.RECEIVE_DECK,
          deck: deck
        })
      }
    });
  },

  destroyDeck: function (id) {
    $.ajax({
      url:'api/decks/' + id,
      type: 'DELETE',
      success: function (deck) {
        AppDispatcher.dispatch({
          actionType: DeckConstants.REMOVE_DECK,
          deck: deck
        });
      }
    })
  }
};

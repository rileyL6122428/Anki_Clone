var AppDispatcher = require("../dispatcher/dispatcher");
var PublicDeckConstants = require('../constants/public_deck_constants');

module.exports = {
  search: function (query) {
    $.ajax({
      url: "/api/public_decks",
      type: "GET",
      data: { query: query },
      success: function(decks){
        AppDispatcher.dispatch({
          actionType: PublicDeckConstants.RECEIVE_PUBLIC_DECKS,
          decks: decks
        })
      }
    })
  },

  fetch: function (id) {
    $.ajax({
      url: "/api/public_decks/" + id,
      type: "GET",
      success: function(deck){
        AppDispatcher.dispatch({
          actionType: PublicDeckConstants.RECEIVE_PUBLIC_DECK,
          deck: deck
        })
      }
    })
  },

//TODO modify method below
  download: function (id) {
    $.ajax({
      url: "/api/public_decks",
      type: "GET",
      data: { query: query },
      success: function(decks){
        AppDispatcher.dispatch({
          actionType: PublicDeckConstants.RECEIVE_PUBLIC_DECKS,
          decks: decks
        })
      }
    })
  }
}

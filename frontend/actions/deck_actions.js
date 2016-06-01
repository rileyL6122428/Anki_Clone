var DeckApiUtil = require('../util/deck_api_util');
module.exports = {
  fetchDecks: function () {
    DeckApiUtil.fetchDecks();
  },

  fetchADeck: function (id) {
    DeckApiUtil.fetchADeck(id);
  },

  createDeck: function (deck) {
    DeckApiUtil.createDeck(deck);
  },

  editDeck: function (deck) {
    DeckApiUtil.editDeck(deck);
  },

  destroyDeck: function (id) {
    DeckApiUtil.destroyDeck(id);
  }
};

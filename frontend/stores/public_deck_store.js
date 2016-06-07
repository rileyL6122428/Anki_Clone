var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var PublicDeckStore = new Store(AppDispatcher);
var SearchUtil = require('./index_search_util');
var PublicDeckConstants = require('../constants/public_deck_constants');

var _publicDecks = {};

PublicDeckStore.all = function () {
  var publicDecks = [];

  for(var id in _publicDecks) { publicDecks.push(_publicDecks[id]); }
  return publicDecks;
}

var receivePublicDecks = function (decks) {
  _publicDecks = {};

  decks.forEach(function(deck){
    _publicDecks[deck.id] = deck
  });
  PublicDeckStore.__emitChange();
}

PublicDeckStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case PublicDeckConstants.RECEIVE_PUBLIC_DECKS:
      receivePublicDecks(payload.decks);
      break;

  }

}

module.exports = PublicDeckStore;

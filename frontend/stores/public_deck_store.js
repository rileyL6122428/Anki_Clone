var AppDispatcher = require('../dispatcher/dispatcher');
var Store = requiure('flux/util');
var PublicDeckStore = new Store(AppDispatcher);
var SearchUtil = require('./index_search_util');
var PublicDeckConstants = require('../constants/public_deck_constants');

var _publicDecks = {};

PublicDeckStore.findByName = function (input) {
  if (input === "") { return []; }
  return SearchUtil.search(_publicDecks, "name", input);
}

var receivePublicDecks = function (decks) {
  _publicDecks = {};

  decks.forEach(function(deck){
    _publicDecks[deck.id] = deck
  });
}

PublicDeckStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case PublicDeckConstants.RECEIVE_PUBLIC_DECKS:
      receivePublicDecks(payload.decks);
      break;
    
  }

}

module.exports = PublicDeckStore;

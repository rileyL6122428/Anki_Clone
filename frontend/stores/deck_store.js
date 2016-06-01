var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var DeckConstants = require('../constants/deck_constants');

var DeckStore = new Store(AppDispatcher);
var _decks = {};

DeckStore.all = function () {
  var decks = [];

  for(var id in _decks) {
    decks.push(_decks[id]);
  }
  return(decks);
}

DeckStore.find = function (id) {
  if(_decks[id]) { return $.extend({}, _decks[id]); }
}

var receiveDecks = function (decks) {
  _decks = {};

  decks.forEach(function(deck) {
    _decks[deck.id] = deck;
  });
}

var receiveADeck = function (deck) {
  _decks[deck.id] = deck;
}

var removeDeck = function(deck){
  delete _decks[deck.id];
}

 DeckStore.__onDispatch = function (payload) {
   switch(payload.actionType) {
     case DeckConstants.RECEIVE_DECKS:
       receiveDecks(payload.decks);
       break;
     case DeckConstants.RECEIVE_DECK:
       receiveADeck(payload.deck);
       break;
     case DeckConstants.REMOVE_DECK:
       removeDeck(payload.deck);
       break;
   }
 }

module.exports = DeckStore;
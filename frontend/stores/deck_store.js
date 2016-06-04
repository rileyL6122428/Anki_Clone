var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var DeckConstants = require('../constants/deck_constants');
var ReviewConstants = require('../constants/review_constants');
var hashHistory = require('react-router').hashHistory

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
  DeckStore.__emitChange();
}

var receiveADeck = function (deck) {
  _decks[deck.id] = deck;
  DeckStore.__emitChange();
  //TODO refactor this into a callback in the new deck form, if possible
  hashHistory.push('/decks/'+deck.id);

}

var removeDeck = function(deck){
  delete _decks[deck.id];
  DeckStore.__emitChange();
}

var receiveReviewResults = function (deck) {
  var deckToUpdate = _decks[deck.id];
  deckToUpdate["reviewTotal"] += 1;
  deckToUpdate["grade"] = deck.grade;
  DeckStore.__emitChange();
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
     case ReviewConstants.RECEIVE_REVIEW_SUMMARY:
       receiveReviewResults(payload.summary.review.deck);
       break;
   }
 }

module.exports = DeckStore;

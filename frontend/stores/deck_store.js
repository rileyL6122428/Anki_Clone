var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var DeckConstants = require('../constants/deck_constants');
var ReviewConstants = require('../constants/review_constants');
var hashHistory = require('react-router').hashHistory
var SearchUtil = require('./index_search_util');

var DeckStore = new Store(AppDispatcher);
var _decks = {};

DeckStore.all = function () {
  var decks = [];
  for(var id in _decks) { decks.push(_decks[id]); }
  return(decks);
}

DeckStore.find = function (id) {
  if(_decks[id]) { return $.extend({}, _decks[id]); }
}

DeckStore.findByName = function(input) {
  return SearchUtil.search(_decks, "name", input);
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
}

var receiveACreatedDeck = function (deck) {
  receiveADeck(deck);
  hashHistory.push("/decks/" + deck.id);
}

var removeDeck = function(deck){
  delete _decks[deck.id];
  DeckStore.__emitChange();
}

var receiveReviewResults = function (deck) {
  _decks[deck.id] = deck;
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
      case DeckConstants.RECEIVE_CREATED_DECK:
        receiveACreatedDeck(payload.deck)
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

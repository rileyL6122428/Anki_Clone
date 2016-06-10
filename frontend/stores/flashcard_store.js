var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var FlashcardConstants = require('../constants/flashcard_constants');
var ReviewConstants = require('../constants/review_constants');
var SearchUtil = require('./index_search_util');
var Util = require('./flashcard_store_util');

var FlashcardStore = new Store(AppDispatcher);
var _flashcards = {};

FlashcardStore.all = function () {
  var flashcards = [];

  for(var id in _flashcards) {
    flashcards.push(_flashcards[id]);
  }
  return(flashcards);
}

FlashcardStore.find = function (id) {
  if(_flashcards[id]) { return $.extend({}, _flashcards[id]); }
}

FlashcardStore.findByFront = function (input) {
  return SearchUtil.search(_flashcards, "front", input);
}

FlashcardStore.drawCards = function(total) {
  var cards = [];
  var gradeInts = [0,50,60,70,80,90,100];

  for(var i = 0; i < gradeInts.length - 1; i++){
    var shuffledCards = shuffledFlashcardsByGrade(gradeInts[i], gradeInts[i + 1])

    for (var j = 0; j < shuffledCards.length; j++) {
      if (cards.length === total || cards.length === storeSize()) {return cards}

      cards.push(shuffledCards[j]);
    }
  }

  return cards;
}
//TODO undo window, for testing only
shuffledFlashcardsByGrade = function (lower, upper) {
  var flashcards = [];

  for(var id in _flashcards) {
    if (_flashcards[id].grade >= lower && _flashcards[id].grade <= upper){
      flashcards.push(_flashcards[id]);
    }
  }

  return Util.shuffle(flashcards);
}


var storeSize = function () {
  return (Object.keys(_flashcards).length);
}

var receiveFlashcards = function (flashcards) {
  _flashcards = {};

  flashcards.forEach(function(flashcard) {
    _flashcards[flashcard.id] = flashcard;
  });
  FlashcardStore.__emitChange();
}

var receiveAFlashcard = function (flashcard) {
  _flashcards[flashcard.id] = flashcard;
  // debugger
  FlashcardStore.__emitChange();
}

var removeFlashcard = function(flashcard){
  delete _flashcards[flashcard.id];
  FlashcardStore.__emitChange();
}

var receiveReviewResults = function (flashcards) {
  flashcards.forEach(function(card){
    var flashcardToUpdate = _flashcards[card.id];
    flashcardToUpdate["grade"] = card.grade;
    flashcardToUpdate["reviewTotal"] += 1;
  })
  FlashcardStore.__emitChange();
}

 FlashcardStore.__onDispatch = function (payload) {
   switch(payload.actionType) {
     case FlashcardConstants.RECEIVE_FLASHCARDS:
       receiveFlashcards(payload.flashcards);
       break;
     case FlashcardConstants.RECEIVE_FLASHCARD:
       receiveAFlashcard(payload.flashcard);
       break;
     case FlashcardConstants.REMOVE_FLASHCARD:
       removeFlashcard(payload.flashcard);
       break;
     case ReviewConstants.RECEIVE_REVIEW_SUMMARY:
       receiveReviewResults(payload.summary.review.flashcards);
       break;
   }
 }

module.exports = FlashcardStore;

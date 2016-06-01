var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var FlashcardConstants = require('../constants/flashcard_constants');

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

var receiveFlashcards = function (flashcards) {
  _flashcards = {};

  flashcards.forEach(function(flashcard) {
    _flashcards[flashcard.id] = flashcard;
  });
}

var receiveAFlashcard = function (flashcard) {
  _flashcards[flashcard.id] = flashcard;
}

var removeFlashcard = function(flashcard){
  delete _flashcards[flashcard.id];
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
   }
 }

module.exports = FlashcardStore;

var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/user_constants');
var TourConstants = require('../constants/tour_constants');

var TourStore = new Store(AppDispatcher);
var _finishedTours = {};
var _initialLogin = true;

TourStore.checkOffTour = function (tourName) {
  _finishedTours[tourName] = true;
};

TourStore.cancelTours = function () {
  for(var tourName in TourConstants) {
    _finishedTours[tourName] = true;
  }
};

TourStore.resetTours = function () {
  for(var tourName in TourConstants) {
    _finishedTours[tourName] = false;
  }
};

TourStore.tourFinished = function (tourName) {
  return _finishedTours[tourName];
};

TourStore.tours = function () { //NOTE Testing only
  return _finishedTours;
}

TourStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.LOGIN_GUEST:
      if(_initialLogin) {
        this.resetTours();
        _initialLogin = false;
      }
      break;
    case UserConstants.LOGIN:
      this.cancelTours();
      break;
  }
  this.__emitChange();
}

module.exports = TourStore;

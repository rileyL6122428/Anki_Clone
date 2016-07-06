var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/user_constants');
var TourConstants = require('../constants/tour_constants');

var TourStore = new Store(AppDispatcher);
var _finishedTours = {};
var _initialLogin = true;

TourStore.checkOffTour = function (tourName) {
  _finishedTours[tourName] = true;
  debugger
};

TourStore.cancelTours = function () {
  for(var tourName in _finishedTours) {
    _finishedTours[tourName] = true;
  }
};

TourStore.resetTours = function () {
  debugger
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
  }
}

module.exports = TourStore;

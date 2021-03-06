var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var ReviewConstants = require('../constants/review_constants');

var ReviewStore = new Store(AppDispatcher);
var _reviews = {};   // NOTE, only holds reviews made in the past week
var _reviewTotal = 0; // NOTE, actually holds users total reviews
                     //      (since account creation)

ReviewStore.lifeTotal = function () { return _reviewTotal; }

ReviewStore.all = function () {
  var reviews = [];

  for(var id in _reviews) {
    reviews.push(_reviews[id]);
  }

  return(reviews);
}

ReviewStore.dayLabels = function () {
  var weekDays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  var today = new Date

  var labels = [];
  for (var i = today.getDay() + 1; i < today.getDay() + 7 ; i++) {
    var dayIdx = i % 7;
    labels.push(weekDays[dayIdx])
  }

  labels.push("Today")
  return labels
}

ReviewStore.allBySortedWeekDay = function () {
  var dayTotals = ReviewStore.allByWeekDay();
  var today = new Date

  var sortedTotals = [];
  for (var i = today.getDay() + 1; i <= today.getDay() + 7 ; i++) {
    var dayIdx = i % 7;
    sortedTotals.push(dayTotals[dayIdx])
  }

  return sortedTotals;
}


ReviewStore.allByWeekDay = function () {
  // NOTE (idx 0 corresponds to sundeay total, idx 1 to Monday, ect...)
  var dayTotals = [0, 0, 0, 0, 0, 0, 0]

  for(var id in _reviews) {
    dayTotals[_reviews[id].createdAt.getDay()] += 1;
  }

  return dayTotals;
}


ReviewStore.find = function (id) {
  if(_reviews[id]) { return $.extend({}, _reviews[id]); }
}

var receiveReviews = function (reviewInfo) {
  _reviewTotal = reviewInfo.total
  _reviews = {};
  reviewInfo.reviews.forEach(function(review) {
    _reviews[review.id] = {createdAt: new Date (review.createdAt)};
  });
  ReviewStore.__emitChange();
}

ReviewStore.__onDispatch = function (payload) {
    switch (payload.actionType) {
      case ReviewConstants.RECEIVE_REVIEWS:
        receiveReviews(payload.reviewInfo);
        break;
    }
}

module.exports = ReviewStore;

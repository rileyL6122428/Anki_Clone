var AppDispatcher = require('../dispatcher/dispatcher');
var ReviewConstants = require('../constants/review_constants');

module.exports = {
  create: function (reviewSummary) {
    $.ajax({
      url: "/api/reviews",
      type: "POST",
      data: {
        deck_id: reviewSummary.deck_id,
        review_grades: reviewSummary.review_grades
      },
      success: function(reviewSummary){
        AppDispatcher.dispatch({
          actionType: ReviewConstants.RECEIVE_REVIEW_SUMMARY,
          summary: reviewSummary
        })
      }
    })
  }
};

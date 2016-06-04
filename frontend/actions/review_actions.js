var ReviewApiUtil = require('../util/review_api_util');

module.exports = {
  logReview: function (reviewSummary) {
    ReviewApiUtil.create(reviewSummary);
  }
};

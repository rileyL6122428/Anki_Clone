var PublicDeckUtil = require('../util/public_deck_api_util');

module.exports = {
  search: function (query) {
    PublicDeckUtil.search(query);
  }
}

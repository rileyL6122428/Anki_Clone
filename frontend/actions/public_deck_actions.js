var PublicDeckUtil = require('../util/public_deck_api_util');

module.exports = {
  searchPublicDecks: function (query) {
    PublicDeckUtil.search(query);
  }
}

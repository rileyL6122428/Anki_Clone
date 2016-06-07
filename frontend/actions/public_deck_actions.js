var PublicDeckUtil = require('../util/public_deck_api_util');

module.exports = {
  search: function (query) {
    PublicDeckUtil.search(query);
  },

  fetch: function (id) {
    PublicDeckUtil.fetch(id);
  },

  downloadDeck: function (id, reRoute) {
    PublicDeckUtil.download(id, reRoute);
  }
}

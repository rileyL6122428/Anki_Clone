var React = require('react');
var SearchBar = require('./decks_search_bar');
var DeckIndex = require('./deck_index');
var Footer = require('../shared/dashboard_footer');

var UserDecks = React.createClass({
  getInitialState: function () {
    return({ query: "" });
  },

  queryChangeCB: function (e) {
    e.preventDefault();

    this.setState({ query: e.target.value })
  },

  render: function() {
    return(
      <div className="Parent-Component Deck-Index">
        <h1>My Decks</h1>
        <SearchBar changeCB={ this.queryChangeCB }/>
        <div className="Overflow-Test">
          <DeckIndex query={ this.state.query }/>
        </div>
        <Footer />
      </div>
    )
  }
});

module.exports = UserDecks;

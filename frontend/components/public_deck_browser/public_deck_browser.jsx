var React = require('react');
var Footer = require('../shared/dashboard_footer');
var SearchBar = require('../user_decks/decks_search_bar');
var DeckIndex = require('./deck_index');
var PublicDeckActions = require('../../actions/public_deck_actions');
var tourSteps = require('./tour_steps');
var Tour = require('../shared/tour')

var PublicDeckBrowse = React.createClass({
  getInitialState: function () {
    return({ query: "" });
  },

  queryChangeCB: function (e) {
    e.preventDefault();

    var query = e.target.value

    this.setState({ query: query })
    PublicDeckActions.search(query)
  },

  render: function () {
    return (
      <div>
        <div className="Parent-Component Import">
          <h1>Get Decks</h1>
          <SearchBar changeCB={ this.queryChangeCB }/>
          <div className="Overflow-Test">
          <DeckIndex query={ this.state.query }/>
          </div>
          <Footer />
          <Tour steps={ tourSteps } />
        </div>
      </div>
    );
  }
});

module.exports = PublicDeckBrowse;

var React = require('react');
var SearchBar = require('./decks_search_bar');
var DeckIndex = require('./deck_index');

var UserDecks = React.createClass({
  render: function(){
    return(
      <div>
        <h1>My Decks </h1>
        <SearchBar />
        <DeckIndex />
      </div>
    )
  }
});

module.exports = UserDecks;

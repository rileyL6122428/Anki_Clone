var React = require('react');

var FlashcardsSearchBar = React.createClass({
  render: function () {
    return (
      <div className="Search-Container">
        <label for="deck-search"> Search:</label><input id="deck-search" type="text" />
      </div>
    );
  }
});

module.exports = FlashcardsSearchBar;
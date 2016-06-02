var React = require('react');

var DecksSearchBar = React.createClass({
  render: function () {
    return (
      <div className="Search-Container">
        <label for="deck-search"> Search:</label><input id="deck-search" type="text" />
      </div>
    );
  }
});

module.exports = DecksSearchBar;

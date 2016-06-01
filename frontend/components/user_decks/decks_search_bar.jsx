var React = require('react');

var DecksSearchBar = React.createClass({
  render: function () {
    return (
      <div>
        <label> Search through your decks:
          <input type="text" />
        </label>
      </div>
    );
  }
});

module.exports = DecksSearchBar;

var React = require('react');
var Content = require('./content');
var Options = require('./options');
var Link = require('react-router').Link;

var DeckShow = React.createClass({
  render: function () {
    return(
      <div>
        <h1>
          <Link to="/decks">To Decks</Link>
          <p>Deck</p>
        </h1>

        <Content/>
        <Options/>
      </div>
    );
  }
});

module.exports = DeckShow;

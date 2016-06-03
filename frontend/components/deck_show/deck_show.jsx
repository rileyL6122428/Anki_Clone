var React = require('react');
var Content = require('./content');
var Options = require('./options');
var DeckHistory = require('./history');
var Link = require('react-router').Link;

var DeckShow = React.createClass({
  render: function () {
    var arrow = "<";
    return(
      <div className="DeckShow">
        <h1>
          <Link to="/decks" className="BackLink">{arrow}</Link>
          <p className="Title">Deck</p>
        </h1>

        <div className="BelowHeader">
          <Content deckId={this.props.params.id}/>
          <DeckHistory />
          <Options deckId={this.props.params.id} />
          <div className="ClearSet" />
        </div>
      </div>
    );
  }
});

module.exports = DeckShow;

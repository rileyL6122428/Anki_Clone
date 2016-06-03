var React = require('react');
var Form = require('./form');
var HeaderWithBack = require('../shared/header_with_back_arrow');
var Link = require('react-router').Link;

NewCard = React.createClass({

  render: function () {
    var deckIndexUrl = "decks/" + this.props.params.id + "/flashcards";
    return(
      <div className="Flashcard-Edit Parent-Component">
        <HeaderWithBack title="New Card" url={deckIndexUrl} />
        <Form deckId={this.props.params.id}/>
      </div>
    );
  }
});

module.exports = NewCard;

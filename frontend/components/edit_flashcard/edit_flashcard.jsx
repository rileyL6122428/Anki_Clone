var React = require('react');
var Form = require('./form');
var HeaderWithBack = require('../shared/header_with_back_arrow');
var Link = require('react-router').Link;

EditCard = React.createClass({

  render: function () {
    var deckId = this.props.params.id;
    var cardId = this.props.params.cardId;
    var cardShowUrl = "/decks/" + deckId + "/flashcards/" + cardId;
    return(
      <div>
        <HeaderWithBack title="Edit Card" url={cardShowUrl} />
        <Form deckId={ deckId } cardId={ cardId }/>
      </div>
    );
  }
});

module.exports = EditCard;

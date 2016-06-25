var React = require('react');
var Form = require('./form');
var HeaderWithBack = require('../shared/header_with_back_arrow');
var Link = require('react-router').Link;

EditCard = React.createClass({

  getInitialState: function() {
    return({ windowCompressed: false })
  },

  componentDidMount: function (){
    var self = this;
    this.intervalId = setInterval(function() {
      if ($(window).width() < 850) {
       self.setState({ windowCompressed: true });
     } else {
       self.setState({ windowCompressed: false });
     }
   }, 200);
  },

  componentWillUnmount: function () {
    var self = this;
    clearInterval(self.intervalId);
  },

  render: function () {
    var deckId = this.props.params.id;
    var cardId = this.props.params.cardId;
    var cardShowUrl = "/decks/" + deckId + "/flashcards/" + cardId;

    var compressionStatus = "";
    if(this.state.windowCompressed) { compressionStatus = "Compressed" }

    return(
      <div className={ "Flashcard-Edit Parent-Component " + compressionStatus }>
        <HeaderWithBack title="Edit Card" url={cardShowUrl} />
        <Form deckId={ deckId } cardId={ cardId }/>
      </div>
    );
  }
});

module.exports = EditCard;

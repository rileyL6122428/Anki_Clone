var React = require('react');
var FlashcardStore = require('../../stores/flashcard_store');
var Link = require('react-router').Link;
var Preview = require('./preview');
var Info = require('./info');
var Options = require('./options');

var FlashcardShow = React.createClass({
  //TODO go back and make it so the store fetches on load
  getInitialState: function () {
    return({card: FlashcardStore.find(this.props.params.cardId)});
  },

  render: function () {
    var arrow = "<";
    var cards_url = ("/decks/" + this.props.params.id + "/flashcards");

    return(
      <div>
        <h1>
          <Link to={ cards_url }>{ arrow }</Link>
          <p>Card</p>
          <Preview card={ this.state.card }/>
          <Info card={ this.state.card }/>
          <Options cardId={ this.props.params.cardId } deckId={ this.props.params.id }/>
        </h1>
      </div>
    );
  }
});

module.exports = FlashcardShow;

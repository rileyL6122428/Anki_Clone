var React = require('react');
var FlashcardStore = require('../../stores/flashcard_store');
var FlashcardActions = require('../../actions/flashcard_actions');
var Link = require('react-router').Link;
var Preview = require('./preview');
var Info = require('./info');
var Options = require('./options');

var FlashcardShow = React.createClass({
  //TODO go back and make it so the store fetches on load
  //STATS needed from card: reviewTotal, grade, front back
  getInitialState: function () {
    var card = FlashcardStore.find(this.props.params.cardId);
    if (!card) { card = { reviewTotal: 0, grade: 0, front: "", back: "" } }
    return({card: card});
  },

  componentDidMount: function () {
    this.listenerToken = FlashcardStore.addListener(this.storeCB);
    FlashcardActions.fetchAFlashcard(this.props.params.cardId);
  },

  storeCB: function () {
    this.setState({ card: FlashcardStore.find(this.props.params.cardId) })
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  render: function () {
    var arrow = "<";
    var cards_url = ("/decks/" + this.props.params.id + "/flashcards");

    return(
      <div className="Flashcard-Show Parent-Component">
        <h1>
          <Link to={ cards_url }>{ arrow }</Link>
          Card
        </h1>
        <div className="ClearSet" />

        <Preview card={ this.state.card }/>
        <div className="Not-Preview">
          <Info card={ this.state.card }/>
          <Options cardId={ this.props.params.cardId } deckId={ this.props.params.id }/>
        </div>

        <div className="ClearSet" />

      </div>
    );
  }
});

module.exports = FlashcardShow;

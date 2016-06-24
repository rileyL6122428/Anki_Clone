var React = require('react');
var FlashcardActions = require('../../actions/flashcard_actions');
var FlashcardStore = require('../../stores/flashcard_store');
var EditPreview = require('./edit_preview');

var Form = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    var card = FlashcardStore.find(this.props.cardId);
    cardFront = cardBack = "";
    if(card) {
      cardFront = card.Front;
      cardBack = card.back;
    }
    return({ front: cardFront, back: cardBack });
  },

  componentDidMount: function () {
    this.eventToken = FlashcardStore.addListener(this.flashcardStoreCB);
    FlashcardActions.fetchAFlashcard(this.props.cardId);
  },

  flashcardStoreCB: function () {
    var card = FlashcardStore.find(this.props.cardId);
    this.setState({ front: card.front, back: card.back });
  },

  componentWillUnmount: function () {
    this.eventToken.remove();
  },

  changeFront: function (e) {
    var newFront = e.target.value
    this.setState({ front: newFront })
  },

  changeBack: function (e) {
    var newBack = e.target.value
    this.setState({ back: newBack })
  },

  submitCB: function (e) {
    e.preventDefault();
    FlashcardActions.editFlashcard({
        front: this.state.front,
        back: this.state.back,
        id: this.props.cardId
      });

    var deckId = this.props.deckId;
    var cardId = this.props.cardId;
    this.context.router.push("/decks/" + deckId + "/flashcards/" + cardId);
  },

  render: function () {

    return(
      <div className="Form">
        <form onSubmit={this.submitCB}>
          <h4>Front</h4>
          <label>
            <textarea
                   onChange={this.changeFront}
                   className="FrontInput"
                   value={this.state.front}/>
          </label>

          <h4>Back</h4>
          <label>
            <textarea
                   onChange={this.changeBack}
                   className="BackInput"
                   value={this.state.back}/>
          </label>
          <br/>

          <input type="submit" value="Save" className="Save" />

        </form>

        <EditPreview card={this.state}/>
        <div className="ClearSet" />
      </div>
    )
  }
});

module.exports = Form;

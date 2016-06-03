var React = require('react');
var FlashcardActions = require('../../actions/flashcard_actions');
var FlashcardStore = require('../../stores/flashcard_store');
var Preview = require('../flashcard_show/preview');

var Form = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    var card = FlashcardStore.find(this.props.cardId);

    return({ front: card.front, back: card.back });
  },

  componentDidMount: function () {
    this.eventToken = FlashcardStore.addListener(this.flashcardStoreCB);
  },

  flashcardStoreCB: function () {
    var deckId = this.props.deckId;
    var cardId = this.props.cardId;
    this.context.router.push("/decks/" + deckId + "/flashcards/" + cardId);
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
  },

  render: function () {

    return(
      <div className="Form">
        <h4>Info</h4>
        <form onSubmit={this.submitCB}>
          <label>Front
            <br/>
            <input type="text"
                   onChange={this.changeFront}
                   className="FrontInput"
                   value={this.state.front}/>
          </label>
          <br/>

          <label>Back
            <br/>
            <input type="text"
                   onChange={this.changeBack}
                   className="BackInput"
                   value={this.state.back}/>
          </label>
          <br/>

          <input type="submit" value="Save" className="Save" />

        </form>

        <Preview card={this.state}/>

      </div>
    )
  }
});

module.exports = Form;

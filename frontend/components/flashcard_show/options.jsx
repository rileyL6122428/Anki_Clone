var React = require('react');
var Link = require('react-router').Link;
var FlashcardActions = require('../../actions/flashcard_actions');
var FlashcardStore = require('../../stores/flashcard_store');

var Options = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentDidMount: function () {
    this.listenerToken = FlashcardStore.addListener(this.flashcardStoreCB);
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  flashcardStoreCB: function () {
    var deckId =  this.props.deckId
    this.context.router.push("/decks/" + deckId + "/flashcards");
  },

  destroyCB: function (e) {
    e.preventDefault();
    FlashcardActions.destroyFlashcard(this.props.cardId);
  },

  render: function () {
    var deckId = this.props.deckId;
    var cardId = this.props.cardId;
    var editDeckUrl = "decks/" + deckId + "/flashcards/" + cardId + "/edit";
    return(
      <div>
        <ul>
          <li>
            <Link to={editDeckUrl}>Edit</Link>
          </li>

          <li>
            <button onClick={this.destroyCB}>Destroy</button>
          </li>

        </ul>
      </div>
    );
  }
});

module.exports = Options;

var React = require('react');
var Link = require('react-router').Link;
var FlashcardActions = require('../../actions/flashcard_actions');

var Options = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  destroyCB: function (e) {
    e.preventDefault();
    FlashcardActions.destroyFlashcard(this.props.cardId);
    this.context.router.push("/decks/" + this.props.deckId + "/flashcards");
  },

  render: function () {
    var deckId = this.props.deckId;
    var cardId = this.props.cardId;
    var editDeckUrl = "decks/" + deckId + "/flashcards/" + cardId + "/edit";
    return(
      <div className="Options group">
            <Link to={editDeckUrl}>Edit</Link>
            <button onClick={this.destroyCB}>Destroy</button>
      </div>
    );
  }
});

module.exports = Options;

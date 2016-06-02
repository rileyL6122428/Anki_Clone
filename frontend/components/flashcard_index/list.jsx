var React = require('react');
var FlashcardStore = require('../../stores/flashcard_store');
var FlashcardActions = require('../../actions/flashcard_actions');
var FlashcardIndexItem = require('./index_item');

var FlashcardIndex = React.createClass({

  getInitialState: function () {
    return({ flashcards: [] })
  },

  componentDidMount: function () {
    this.listenerToken = FlashcardStore.addListener(this.flashcardStoreCB);
    FlashcardActions.fetchFlashcards(this.props.deckId);
  },

  flashcardStoreCB: function () {
    this.setState({ flashcards: FlashcardStore.all() });
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  render: function () {
    var list = "";
    var deckId = this.props.deckId;
    if(this.state.flashcards.length !== 0) {

      var list = (
        <div className="Wrapper">
        {
          this.state.flashcards.map(function(flashcard){
            return(
              <FlashcardIndexItem key={flashcard.id}
              cardId={flashcard.id}
              key={flashcard.id}
              front={flashcard.front}
              grade={"insertGrade"}
              deckId={deckId} />
            );
          })
        }
        </div>
      );
    }

    return(
      <div>
        <ul>
          {list}
        </ul>
      </div>

    );
  }
});

module.exports = FlashcardIndex;

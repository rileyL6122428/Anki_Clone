var React = require('react');
var FlashcardStore = require('../../stores/flashcard_store');
var FlashcardActions = require('../../actions/flashcard_actions');
var FlashcardIndexItem = require('./index_item');
var GraphUtil = require('../graphs/graph_util');

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
            var gradePercentage = flashcard.grade;
            return(
              <FlashcardIndexItem key={flashcard.id}
              cardId={flashcard.id}
              key={flashcard.id}
              front={flashcard.front}
              gradePercentage={ gradePercentage }
              deckId={deckId} />
            );
          })
        }
        </div>
      );
    }

    return(
      <div className="List-Div">
        <ul>
          {list}
        </ul>
      </div>

    );
  }
});

module.exports = FlashcardIndex;

var React = require('react');
var FlashcardStore = require('../../stores/flashcard_store');
var DeckStore = require('../../stores/deck_store');
var FlashcardActions = require('../../actions/flashcard_actions');
var FlashcardIndexItem = require('./index_item');
var GraphUtil = require('../graphs/graph_util');
var LoadingBar = require('../graphs/loading_bar');

var FlashcardIndex = React.createClass({
  getInitialState: function () {
    return({
      flashcards: FlashcardStore.all(),
      cardsReceived: !this.loadNeeded(),
      minimumLoadTimeFinished: !this.loadNeeded(),
      empty: false
    });
  },

  componentDidMount: function () {
    this.listenerToken = FlashcardStore.addListener(this.flashcardStoreCB);
    FlashcardActions.fetchFlashcards(this.props.deckId);
    DeckStore.setLastDeckId(this.props.deckId);

    var self = this;
    setTimeout(function(){
      self.setState({ minimumLoadTimeFinished: true })
    }, 1000)
  },

  flashcardStoreCB: function () {
    var cards = FlashcardStore.all()
    var deckEmpty = (cards.length === 0);
    this.setState({
      flashcards: cards,
      cardsReceived: true,
      empty: deckEmpty
    });
  },

  componentWillReceiveProps: function (props) {
    this.setState({ flashcards: FlashcardStore.findByFront(props.query) })
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
    this.state.cardsReceived = false;
  },

  loadNeeded: function () {
    return DeckStore.lastDeckId() !== this.props.deckId;
  },

  generateList: function () {
    var deckId = this.props.deckId;
    return (
      <div className="List-Div"><ul>
      <div className="Wrapper">
      {
        this.state.flashcards.map(function(flashcard){
          return(
            <FlashcardIndexItem key={ flashcard.id } cardId={ flashcard.id }
            front={ flashcard.front } gradePercentage={ flashcard.grade }
            deckId={ deckId } />
          );
        })
      }
      </div>
      </ul></div>
    );
  },

  emptyList: function () {
    return(
      <div className="Empty-Flashcard-Index-Statement">
        <p>You currently do not have any flashcards.</p>
        <p>You can create new flashcards by pressing</p>
        <p>the new button in the top right corender of</p>
        <p>this screen.</p>
      </div>
    )
  },

  list: function () {
    if(this.state.empty) {
      return this.emptyList();
    } else {
      return this.generateList();
    }
  },

  render: function () {
    if(this.state.cardsReceived && this.state.minimumLoadTimeFinished) {
      return this.list();
    } else {
      return <div className="Loading-Bar"><LoadingBar/></div>;
    }
  }
});

module.exports = FlashcardIndex;

var React = require('react');
var Recap = require('./recap');
var Front = require('./front');
var Flipped = require('./flipped');
var FlashcardStore = require('../../stores/flashcard_store');
var FlashcardActions = require('../../actions/flashcard_actions');
var ReviewActions = require('../../actions/review_actions');
var DeckStore = require('../../stores/deck_store');

var Review =  React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return({
      cardIdx: 0,
      flipped: false,
      reviewSummary: {},
      deckName: DeckStore.find(this.props.params.id).name
    });
  },

  componentDidMount: function () {
    this.listenerToken = FlashcardStore.addListener(this.flashcardStoreCB);
    FlashcardActions.fetchFlashcards(this.props.params.id);
  },

  flashcardStoreCB: function () {
    this.setState({ cards: FlashcardStore.drawCards(10) });
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  backArrowCB: function (e) {
    e.preventDefault();

    this.context.router.push("/decks/" + this.props.params.id);
    this.shipGrades();
    this.resetReviewState();
  },

  flipCB: function () {
    this.setState({ flipped: true });
  },

  gradeCB: function (grade) {
    var cardId = this.state.cards[this.state.cardIdx].id
    this.state.reviewSummary[cardId] = grade;
    if (this.state.cardIdx === 9) { this.shipGrades () }
    console.log(this.state.reviewSummary);
    this.setState({ cardIdx: this.state.cardIdx + 1, flipped: false });
  },

  continueCB: function() {
    this.resetReviewState();
  },

  shipGrades: function () {
    ReviewActions.logReview({
      deck_id: this.props.params.id,
      review_grades: this.state.reviewSummary
    });
  },

  resetReviewState: function () {
    this.setState({ cardIdx: 0, flipped: false, reviewSummary: {} });
  },

  render: function () {
    var arrow = "<"
    var title = "Review";
    var cardFront = "";
    var cardBack = "";
    if (this.state.cards && this.state.cardIdx < 10) {
      cardFront = this.state.cards[this.state.cardIdx].front;
      cardBack = this.state.cards[this.state.cardIdx].back;
    }
    if(this.state.cardIdx === 10) { title = "Recap"; }

    return (
      <div>
        <h1>
          <button onClick={this.backArrowCB} className="BackLink">{ arrow }</button>
          <p className="Title">{ title }</p>
        </h1>

        <h6>{ this.state.deckName }</h6>

        <Front   showing={ this.state.cardIdx < 10 && !this.state.flipped }
                 cardFront={ cardFront }
                 flipCB={ this.flipCB }/>

        <Flipped showing={ this.state.cardIdx < 10 && this.state.flipped }
                 cardFront={ cardFront }
                 cardBack={ cardBack }
                 gradeCB={ this.gradeCB }/>

        <Recap   showing={ this.state.cardIdx === 10 }
                 continueCB={this.continueCB}/>

      </div>
    );
  }
});

module.exports = Review;

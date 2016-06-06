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
      deck: DeckStore.find(this.props.params.id),
      cards: ["loading"],
      gradesShipped: false
    });
  },

  componentDidMount: function () {
    this.flashcardListenerToken = FlashcardStore.addListener(this.flashcardStoreCB);
    FlashcardActions.fetchFlashcards(this.props.params.id);
  },

  flashcardStoreCB: function () {
    this.setState({ cards: FlashcardStore.drawCards(10) });
  },

  deckStoreCB: function () {
    //TODO sync up with deck store so you can get access to review stats on the deck
    this.setState({ deck: DeckStore.find(this.props.params.id) })
  },

  componentWillUnmount: function () {
    this.flashcardListenerToken.remove();
  },

  backArrowCB: function (e) {
    e.preventDefault();

    this.context.router.push("/decks/" + this.props.params.id);
    if (!this.state.gradesShipped) { this.shipGrades(); }
    this.resetReviewState();
  },

  flipCB: function () {
    this.setState({ flipped: true });
  },

  gradeCB: function (grade) {
    var stateChanges = { cardIdx: this.state.cardIdx + 1, flipped: false }
    var cardId = this.state.cards[this.state.cardIdx].id
    this.state.reviewSummary[cardId] = grade;

    if (this.state.cardIdx === this.state.cards.length - 1) {
      this.shipGrades();
      stateChanges["gradesShipped"] = true;
    }

    this.setState(stateChanges);
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
    this.setState({
      cardIdx: 0,
      flipped: false,
      reviewSummary: {} ,
      gradesShipped: false
    });
  },

  _reviewSummaryEmpty: function() {
    return (Object.keys(this.state.reviewSummary).length === 0);
  },

  _reviewGrade: function () {

    var gradeCount = Object.keys(this.state.reviewSummary).length;
    if(gradeCount === 0) { return 0; }

    var total = 0;
    for (var id in this.state.reviewSummary) {
      total += this.state.reviewSummary[id];
    }

    return (Math.round(total / gradeCount));
  },

  render: function () {
    var arrow = "<"
    var title = "Review";
    var cardFront = "";
    var cardBack = "";
    var cardTotal = this.state.cards.length
    if (this.state.cards && this.state.cardIdx < cardTotal) {
      cardFront = this.state.cards[this.state.cardIdx].front;
      cardBack = this.state.cards[this.state.cardIdx].back;
    }
    if(this.state.cardIdx === cardTotal) { title = "Recap"; }

    return (
      <div className="Parent-Component Review">
        <h1>
          <button onClick={this.backArrowCB} className="BackLink">{ arrow }</button>
          <p className="Title">{ title }</p>

        </h1>

        <h6>{ this.state.deck.name }</h6>

        <Front   showing={ this.state.cardIdx < cardTotal && !this.state.flipped }
                 cardFront={ cardFront }
                 flipCB={ this.flipCB }/>

               <Flipped showing={ this.state.cardIdx < cardTotal && this.state.flipped }
                       cardFront={ cardFront }
                       cardBack={ cardBack }
                       gradeCB={ this.gradeCB }/>

               <Recap   showing={ this.state.cardIdx === cardTotal }
                        continueCB={this.continueCB}
                        reviewGrade={this._reviewGrade()}
                        deck={ this.state.deck }/>

      </div>
    );
  }
});

module.exports = Review;

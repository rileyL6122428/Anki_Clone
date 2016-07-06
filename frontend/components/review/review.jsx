var React = require('react');
var Recap = require('./recap');
var Front = require('./front');
var Flipped = require('./flipped');
var FlashcardStore = require('../../stores/flashcard_store');
var FlashcardActions = require('../../actions/flashcard_actions');
var DeckActions = require('../../actions/deck_actions');
var ReviewActions = require('../../actions/review_actions');
var DeckStore = require('../../stores/deck_store');
var ReviewProgressCircle = require('../graphs/review_progress_bar');
var frontTourSteps = require('./tour_steps/front_tour_steps');
var flippedTourSteps = require('./tour_steps/flipped_tour_steps');
var recapTourSteps = require('./tour_steps/recap_tour_steps');
var Tour = require('../shared/tour');
var TourConstants = require('../../constants/tour_constants');

var Review =  React.createClass({
  contextTypes: { router: React.PropTypes.object.isRequired },

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
    this.cardListenerToken = FlashcardStore.addListener(this.flashcardStoreCB);
    this.deckListenerToken = DeckStore.addListener(this.deckStoreCB);
    FlashcardActions.fetchFlashcards(this.props.params.id);
    DeckActions.fetchADeck(this.props.params.id);
  },

  flashcardStoreCB: function () {
    this.setState({ cards: FlashcardStore.drawCards(10) });
  },

  deckStoreCB: function () {
    this.setState({ deck: DeckStore.find(this.props.params.id) })
  },

  componentWillUnmount: function () {
    this.cardListenerToken.remove();
    this.deckListenerToken.remove();
  },

  backArrowCB: function (e) {
    e.preventDefault();

    this.context.router.push("/decks/" + this.props.params.id);
    if (!this.state.gradesShipped && Object.keys(this.state.reviewSummary).length > 0) { this.shipGrades(); }
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
      reviewSummary: {},
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

  tour: function() {
    if(this.state.cardIdx === 0 && !this.state.flipped) {
      return <Tour extraClasses="FrontTour" steps={ frontTourSteps } tourName={ TourConstants.REVIEW_FRONT }/>
    } else if(this.state.cardIdx === 0 && this.state.flipped) {
      return <Tour extraClasses="FlippedTour" steps={ flippedTourSteps } tourName={ TourConstants.REVIEW_FLIPPED }/>
    } else if (this.state.gradesShipped) {
      return <Tour extraClasses="RecapTour" steps={ recapTourSteps } tourName={ TourConstants.REVIEW_RECAP }/>
    } else {}
  },

  render: function () {
    var arrow = "<"
    var title = "Review";
    var cardFront = cardBack = deckName =  "";
    var totalCards = 1;
    var cardTotal = this.state.cards.length
    if (this.state.cards && this.state.cardIdx < cardTotal) {
      cardFront = this.state.cards[this.state.cardIdx].front;
      cardBack = this.state.cards[this.state.cardIdx].back;
      totalCards = this.state.cards.length;
    }
    if(this.state.cardIdx === cardTotal) { title = "Recap"; }
    if(this.state.deck) { deckName = this.state.deck.name; }

    return (
      <div className="Parent-Component Review">
        <h1>
          <button onClick={this.backArrowCB} className="BackLink">{ arrow }</button>
          <p className="Title">{ title }</p>

        </h1>

        <h6>{ deckName }
          <ReviewProgressCircle className="Progress-Circle"
                                completedCards={ this.state.cardIdx }
                                totalCards={ cardTotal } /></h6>

          <Front showing={ this.state.cardIdx < cardTotal && !this.state.flipped }
                 cardFront={ cardFront }
                 flipCB={ this.flipCB }/>

          <Flipped showing={ this.state.cardIdx < cardTotal && this.state.flipped }
                   cardFront={ cardFront }
                   cardBack={ cardBack }
                   gradeCB={ this.gradeCB }/>

           <Recap showing={ this.state.cardIdx === cardTotal }
                  continueCB={this.continueCB}
                  reviewGrade={this._reviewGrade()}
                  deck={ this.state.deck }/>
           { this.tour() }
      </div>
    );
  }
});

module.exports = Review;

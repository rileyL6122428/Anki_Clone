var React = require('react');
var Info = require('./info');
var History = require('./history');
var DeckStore = require('../../stores/deck_store');
var DeckActions = require('../../actions/deck_actions');

var Content = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return({ deck: null })
  },

  componentDidMount: function (){
    this.listenerToken = DeckStore.addListener(this.storeCB)
    DeckActions.fetchADeck(parseInt(this.props.deckId));
  },

  storeCB: function () {
    this.setState({ deck: DeckStore.find(parseInt(this.props.deckId)) });
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  reviewCB: function (e) {
    e.preventDefault();
    if (this.state.deck.cardTotal > 0) {
      this.context.router.push("/decks/" + this.state.deck.id + "/review");
    } else {
      this.context.router.push('decks/' + this.state.deck.id + '/new-flashcards');
    }

  },

  render: function () {
    var deckName, cardTotal, grade, gradeDistribution, reviewsToday, reviewsPerDay, reviewTotal;

    if(this.state.deck) {
      deckName = this.state.deck.name;
      cardTotal = this.state.deck.cardTotal;
      grade = Math.round(this.state.deck.grade);
      gradeDistribution = this.state.deck.gradeDistribution;
      reviewsToday = this.state.deck.reviewsToday;
      reviewsPerDay = this.state.deck.reviewsPerDay;
      reviewTotal = this.state.deck.reviewTotal;
    } else {
      deckName = "";
      gradeDistribution = [0, 0, 0, 0, 0, 0, 0];
      cardTotal = grade = reviewsToday = reviewsPerDay = reviewTotal = 0;
    }

    return(
      <div className="ShowContent">
        <h2>{deckName}</h2>
        <Info cardTotal={cardTotal}
              grade={grade}
              gradeDistribution={gradeDistribution}/>
        <div className="Divider"></div>
        <History reviewsToday={reviewsToday}
                 reviewsPerDay={ reviewsPerDay }
                 reviewTotal={ reviewTotal }/>

        <div className="ClearSet" />
        <button className="Review" onClick={this.reviewCB}>
          <div className="buttonText">Review</div>
        </button>
      </div>
    );
  }
});

module.exports = Content;

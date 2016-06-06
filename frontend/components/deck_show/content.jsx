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
    this.context.router.push("/decks/" + this.state.deck.id + "/review");
  },

  render: function () {
    var deckName, cardTotal, grade, gradeDistribution;

    if(this.state.deck) {
      deckName = this.state.deck.name;
      cardTotal = this.state.deck.cardTotal;
      grade = this.state.deck.grade;
      gradeDistribution = this.state.deck.gradeDistribution;
    } else {
      deckName = "";
      cardTotal = 0;
      grade = 0;
      gradeDistribution = [0, 0, 0, 0, 0, 0, 0];
    }

    return(
      <div className="ShowContent">
        <h2>{deckName}</h2>
        <Info cardTotal={cardTotal}
              grade={grade}
              gradeDistribution={gradeDistribution}/>
        <div className="Divider"></div>
        <History />
        <div className="ClearSet" />
        <button className="Review" onClick={this.reviewCB}>
          <div className="buttonText">Review</div>
        </button>
      </div>
    );
  }
});

module.exports = Content;

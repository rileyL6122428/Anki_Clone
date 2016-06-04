var React = require('react');
var Info = require('./info');
var History = require('./history');
var DeckStore = require('../../stores/deck_store');
var DeckActions = require('../../actions/deck_actions');

var Content = React.createClass({


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

  render: function () {
    var deckName, cardTotal, grade;
    if(this.state.deck) {
      deckName = this.state.deck.name;
      cardTotal = this.state.deck.cardTotal;
      grade = this.state.deck.grade;
    } else {
      deckName = "";
      cardTotal = 0;
      grade = 0;
    }
    return(
      <div className="ShowContent">
        <h2>{deckName}</h2>
        <Info cardTotal={cardTotal}
              grade={grade}/>
        <div className="Divider"></div>
        <History />
        <div className="ClearSet" />
        <button className="Review"><div className="buttonText">Review</div></button>
      </div>
    );
  }
});

module.exports = Content;

var React = require('react');
var Content = require('./content');
var Options = require('./options');
var DeckHistory = require('./history');
var Link = require('react-router').Link;

var DeckShow = React.createClass({

  getInitialState: function() {
    return({
      deck: DeckStore.find(parseInt(this.props.deckId)),
      windowCompressed: false
    })
  },

  componentDidMount: function (){

    var self = this;
    this.intervalId = setInterval(function() {
      if ($(window).width() < 1025) {
       self.setState({ windowCompressed: true });
     } else {
       self.setState({ windowCompressed: false });
     }
   }, 200);
  },

  componentWillUnmount: function () {
    var self = this;
    clearInterval(self.intervalId);
  },

  render: function () {
    var compressStatus = "";
    if(this.state.windowCompressed) { var compressStatus = "Compressed" }
    var arrow = "<";

    return(
      <div className={ "DeckShow " + compressStatus }>
        <h1>
          <Link to="/decks" className="BackLink">{arrow}</Link>
          <p className="Title">Deck</p>
        </h1>

        <div className="BelowHeader">
          <Content deckId={this.props.params.id}/>
          <Options deckId={this.props.params.id} />
          <div className="ClearSet" />
        </div>
      </div>
    );
  }
});

// <DeckHistory />
module.exports = DeckShow;

var React = require('react');
var Form = require('./form');
var HeaderWithBack = require('../shared/header_with_back_arrow');
var Link = require('react-router').Link;

NewCard = React.createClass({

  getInitialState: function() {
    return({ windowCompressed: false })
  },

  componentDidMount: function (){
    var self = this;
    this.intervalId = setInterval(function() {
      if ($(window).width() < 850 && !self.state.windowCompressed) {
       self.setState({ windowCompressed: true });
     }
      if($(window).width() >= 850 && self.state.windowCompressed) {
       self.setState({ windowCompressed: false });
     }
   }, 200);
  },

  componentWillUnmount: function () {
    var self = this;
    clearInterval(self.intervalId);
  },

  render: function () {
    var compressionStatus = "";
    if(this.state.windowCompressed) { compressionStatus = "Compressed" }

    var deckIndexUrl = "decks/" + this.props.params.id + "/flashcards";
    return(
      <div className={"Flashcard-New Parent-Component " + compressionStatus}>
        <HeaderWithBack title="New Card" url={deckIndexUrl} />
        <Form deckId={this.props.params.id}/>
      </div>
    );
  }
});

module.exports = NewCard;

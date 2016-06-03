var React = require('react');
var Form = require('./form');
var Header = require('./header');

var EditDeck = React.createClass({
  render: function () {
    return(
      <div className="EditDeck">
        <Header deckId={this.props.params.id}/>
        <Form deckId={this.props.params.id}/>
      </div>
    );
  }
});

module.exports = EditDeck;

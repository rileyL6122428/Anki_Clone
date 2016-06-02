var React = require('react');
var Form = require('./form');
var Header = require('./header');

var NewDeck = React.createClass({
  render: function () {
    return(
      <div>
        <Header/>
        <Form/>
      </div>
    );
  }
});

module.exports = NewDeck;

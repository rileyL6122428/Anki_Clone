var React = require('react');
var Preview = require('../flashcard_show/preview');

var Flipped =  React.createClass({
  render: function () {
    if (!this.props.showing) { return <div></div>; }
    return (
      <div>
        <Preview card={ {front: this.props.cardFront, back: this.props.cardBack} }/>
        <button onClick={ this.props.gradeCB.bind(null, 0) }>Fail</button>
        <button onClick={ this.props.gradeCB.bind(null, 35) }>Hard</button>
        <button onClick={ this.props.gradeCB.bind(null, 70) }>Good</button>
        <button onClick={ this.props.gradeCB.bind(null, 100) }>Easy</button>
      </div>
    );
  }
});

module.exports = Flipped;

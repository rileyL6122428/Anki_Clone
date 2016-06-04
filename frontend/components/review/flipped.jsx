var React = require('react');
var Preview = require('../flashcard_show/preview');

var Flipped =  React.createClass({
  render: function () {
    if (!this.props.showing) { return <div></div>; }
    return (
      <div className="Flipped">
        <Preview card={ {front: this.props.cardFront, back: this.props.cardBack} }/>
        <div className="Buttons">
          <button className="Fail"
                  onClick={ this.props.gradeCB.bind(null, 0) }>Fail</button>
          <button className="Hard"
                  onClick={ this.props.gradeCB.bind(null, 35) }>Hard</button>
          <button className="Good"
                  onClick={ this.props.gradeCB.bind(null, 70) }>Good</button>
          <button className="Easy"
                  onClick={ this.props.gradeCB.bind(null, 100) }>Easy</button>
        </div>
      </div>
    );
  }
});

module.exports = Flipped;

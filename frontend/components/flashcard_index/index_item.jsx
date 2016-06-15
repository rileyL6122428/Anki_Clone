var React = require('react');
var Link = require('react-router').Link;
var GraphUtil = require('../graphs/graph_util');

var FlashcardIndexItem = React.createClass({
  render: function () {

    var deckId = this.props.deckId;
    var cardId = this.props.cardId;
    var showUrl = "/decks/" + deckId + "/flashcards/" + cardId;

    var grade = GraphUtil.gradeByPercentage(this.props.gradePercentage)
    var color = GraphUtil.colorByPercentage(this.props.gradePercentage, 0.7)
    var border = "border-top: 1px solid " + color;
    var styleHash = { backgroundColor:  color , border: "1px solid " + color };

    var frontSample = this.props.front;
    if(this.props.front.length > 12 ) {
      frontSample = this.props.front.slice(0,12) + "..."
    }

    return(
      <Link to={showUrl}>
        <li className="Flashcard-Index-Item">
            <div style={ styleHash }><div className="Grade">{ grade }</div></div>
            <h5><div className="Front-Sample">{ frontSample }</div></h5>
        </li>
      </Link>
    )
  }
});

module.exports = FlashcardIndexItem;

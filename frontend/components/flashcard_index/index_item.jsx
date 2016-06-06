var React = require('react');
var Link = require('react-router').Link;
var GraphUtil = require('../graphs/graph_util');

var FlashcardIndexItem = React.createClass({
  render: function () {

    var deckId = this.props.deckId;
    var cardId = this.props.cardId;
    var showUrl = "/decks/" + deckId + "/flashcards/" + cardId;

    var grade = GraphUtil.gradeByPercentage(this.props.gradePercentage)
    var color = GraphUtil.colorByPercentage(this.props.gradePercentage)
    var border = "border-top: 1px solid " + color;
    var styleHash = { backgroundColor:  color };

    var frontSample = this.props.front.slice(0,12);

    return(
      <Link to={showUrl}>
        <li className="Flashcard-Index-Item">
            <p style={ styleHash }>{ grade }</p>
            <h5>{ frontSample }</h5>
        </li>
      </Link>
    )
  }
});

module.exports = FlashcardIndexItem;

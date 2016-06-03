var React = require('react');
var Link = require('react-router').Link;

var FlashcardIndexItem = React.createClass({
  render: function () {
    //TODO change the following link such that it goes to the flashcard show page
    return(
      <Link to={"/decks/" + this.props.deckId + "/flashcards/" + this.props.cardId}>
        <li className="Flashcard-Index-Item">
            <p>{this.props.grade}</p>
            <h5>{this.props.front.slice(0,12)}</h5>
        </li>
      </Link>
    )
  }
});

module.exports = FlashcardIndexItem;

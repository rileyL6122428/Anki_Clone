var React = require('react');
var Link = require('react-router').Link;

var FlashcardIndexItem = React.createClass({
  render: function () {
    //TODO change the following link such that it goes to the flashcard show page
    return(
      <Link to={"/dashboard"}>
        <li className="Flashcard-Index-Item">
            <p>{this.props.grade}</p>
            <h5>{this.props.front}</h5>
        </li>
      </Link>
    )
  }
});

module.exports = FlashcardIndexItem;

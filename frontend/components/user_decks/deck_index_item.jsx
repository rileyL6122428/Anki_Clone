var React = require('react');
var Link = require('react-router').Link;

var DeckIndexItem = React.createClass({
  render: function () {
    return(
      <Link to={"decks/" + this.props.id}>
        <li className="Deck-Index-Item">

            <h5>{this.props.name}</h5>
            <p>{this.props.totalCards}</p>
            <p>{this.props.grade}</p>

        </li>
        </Link>
    )
  }
});

module.exports = DeckIndexItem;

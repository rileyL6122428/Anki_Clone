var React = require('react');
var Link = require('react-router').Link;

var DeckIndexItem = React.createClass({
  render: function () {
    return(
      <Link to={"decks/" + this.props.id}>
        <li className="Deck-Index-Item">
            <div className="Left-Side-Content" >
              <h5>{this.props.name}</h5>
            <p>{this.props.totalCards}</p>
            </div>
            <p className="Grade">{this.props.grade}</p>
            <div className="ClearSet" />
        </li>
        </Link>
    )
  }
});

module.exports = DeckIndexItem;

var React = require('react');
var Link = require('react-router').Link;

var DeckIndexItem = React.createClass({
  //TODO wrap contents in link to deck show
  render: function () {
    return(
        <li>
          <Link to={"decks/" + this.props.id}>
            <h5>{this.props.name}</h5>
            <p>{this.props.totalCards}</p>
            <p>{this.props.grade}</p>
          </Link>
        </li>
    )
  }
});

module.exports = DeckIndexItem;

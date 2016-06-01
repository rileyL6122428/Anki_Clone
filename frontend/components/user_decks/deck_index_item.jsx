var React = require('react');

var DeckIndexItem = React.createClass({
  //TODO wrap contents in link to deck show
  render: function () {
    return(
        <li>
          <h5>{this.props.name}</h5>
          <p>{this.props.totalCards}</p>
          <p>{this.props.grade}</p>
        </li>
    )
  }
});

module.exports = DeckIndexItem;

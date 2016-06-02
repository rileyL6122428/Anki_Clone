var React = require('react');
var Link = require('react-router').Link;

var Header = React.createClass({
  render: function() {
    return(
      <div className="Header">
        <Link to={"/decks/" + this.props.deckId} className="Cancel">Cancel</Link>
        <h1>Edit Deck</h1>
      </div>
    );
  }
});

module.exports = Header;

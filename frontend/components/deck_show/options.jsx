var React = require('react');
var Link = require('react-router').Link;


//TODO set link destinations to proper destinations

var Options = React.createClass ({
  render: function () {
    return(
      <div className="Options">
        <ul>
          <Link to={"/edit-deck/" + this.props.deckId}>
            <li className="group">
              <div className="Edit-Icon"></div>
              <div className="Option-Label">Edit Deck</div>
            </li>
          </Link>

          <Link to={"/decks/" + this.props.deckId + "/flashcards"}>
            <li className="group">
              <div className="Card-Icon"></div>
              <div className="Option-Label">Cards</div>
            </li>
          </Link>

          <Link to="/dashboard">
            <li className="group">
              <div className="Remove-Icon"></div>
              <div className="Option-Label">Remove</div>
            </li>
          </Link>
        </ul>
      </div>
    );
  }
})

module.exports = Options;

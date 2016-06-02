var React = require('react');
var Link = require('react-router').Link;


//TODO set link destinations to proper destinations

var Options = React.createClass ({
  render: function () {
    return(
      <div className="Options">
        <h3>Options</h3>
        <ul>
          <li>
            <Link to="/dashboard">Deck Info</Link>
          </li>

          <li>
            <Link to="/dashboard">Cards</Link>
          </li>

          <li>
            <Link to="/dashboard">Remove</Link>
          </li>
        </ul>
      </div>
    );
  }
})

module.exports = Options;

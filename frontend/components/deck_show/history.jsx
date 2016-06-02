var React = require('react');

var History = React.createClass ({
  render: function () {
    return(
      <div className="DeckHistory">
        <h3>History</h3>
        <ul>

        <li>
         <p>Reviews Today</p>
         <p>Insert Total</p>
        </li>

        <li>
          <p>Reviews per Day (average)</p>
          <p>Insert Total</p>
        </li>

        <li>
          <p>Total number of Review</p>
          <p>Insert Total</p>
        </li>

        </ul>

        <div>Insert weekly breakdown of Reviews</div>
      </div>
    );
  }
});

module.exports = History;

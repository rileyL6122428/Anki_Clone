var React = require('react');

var Info = React.createClass({
  render: function () {

    return(
      <div>
      <h4>INFO</h4>
      <ul>
        <li>
          <p className="StatTitle">Total number of Reviews</p>
          <p className="Stat">{ this.props.card.review_total }</p>
          <div className="ClearSet" />
        </li>

        <li>
          <p className="StatTitle">Grade</p>
          <p className="Stat">{ this.props.card.grade }</p>
          <div className="ClearSet" />
        </li>

      </ul>
      </div>
    );
  }
});

module.exports = Info;

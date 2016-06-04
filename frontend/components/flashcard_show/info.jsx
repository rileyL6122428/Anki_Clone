var React = require('react');

var Info = React.createClass({
  render: function () {

    return(
      <div className="Info">
      <h4 className="Stat-Header">INFO</h4>
      <ul className="Stat-List">
        <li className="Statistic">
          <p className="StatTitle">Total number of Reviews</p>
          <p className="Stat">{ this.props.card.reviewTotal }</p>
          <div className="ClearSet" />
        </li>

        <li className="Statistic">
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

var React = require('react');

var Info = React.createClass ({
  render: function () {
    return(
      <div className="DeckInfo">
        <h3>Info</h3>
        <div>
          <div>insertTotal</div>
          <p>{ this.props.cardTotal }</p>
        </div>

        <div>
          <div>{ this.props.grade }%</div>
          <p>Grade</p>
        </div>

        <div>gradeByCardGraph</div>
      </div>
    );
  }
})

module.exports = Info;

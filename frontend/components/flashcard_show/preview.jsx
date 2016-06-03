var React = require('react');

var Preview = React.createClass({
  render: function () {

    return(
      <div className="Preview">
        <p>
          <div className="Front">{ this.props.card.front }</div>
        </p>
          <div className="Preview-Divider" />
        <p >
          <div className="Back">{ this.props.card.back }</div>
        </p>
      </div>
    );
  }
});

module.exports = Preview;

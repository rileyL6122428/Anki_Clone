var React = require('react');

var Preview = React.createClass({
  render: function () {

    return(
      <div className="Preview">
        <div className="List-Center">
          <div className="Section">
            <div className="Front">{ this.props.card.front }</div>
          </div>
          <div className="Preview-Divider" />
          <div className="Section P-Back">
            <div className="Back">{ this.props.card.back }</div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Preview;

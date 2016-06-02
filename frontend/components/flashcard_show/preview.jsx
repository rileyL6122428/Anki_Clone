var React = require('react');

var Preview = React.createClass({
  render: function () {

    return(
      <div>
        <p>{ this.props.card.front }</p>
        <div className='Divider' />
        <p>{ this.props.card.back }</p>
      </div>
    );
  }
});

module.exports = Preview;

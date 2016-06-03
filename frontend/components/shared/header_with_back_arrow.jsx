var React = require('react');
var Link = require('react-router').Link;

HeaderWithBack = React.createClass({
  render: function () {
    var arrow = "<";
    return(
      <div className="Header-With-Arrow">
        <h1>
          <Link to={this.props.url} >{ arrow }</Link>
          <p>{ this.props.title }</p>
        </h1>
        <div className="ClearSet" />
      </div>
    );
  }
});

module.exports = HeaderWithBack;

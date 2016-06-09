var React = require('react');

var DecksSearchBar = React.createClass({

  onFocus: function (e) {
    e.target.value = ""
  },

  render: function () {
    return (
      <div className="Search-Container">
        <div className="Mag-And-Bar">
          <div className="Mag-Icon"></div>
          <input id="deck-search"
            type="text"
            placeholder="Search"
            onChange={this.props.changeCB} />
        </div>
      </div>
    );
  }
});

module.exports = DecksSearchBar;

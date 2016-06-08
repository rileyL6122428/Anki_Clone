var React = require('react');

var FlashcardsSearchBar = React.createClass({
  render: function () {
    return (
      <div className="Search-Container">
        <div className="Mag-And-Bar">
          <div className="Mag-Icon"></div>
          <input id="deck-search"
                 type="text"
                 placeholder="Search"
                 onChange={ this.props.queryChangeCB }/>

        </div>
      </div>
    );
  }
});

module.exports = FlashcardsSearchBar;

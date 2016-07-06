var React = require('react');
var PublicDeckStore = require('../../stores/public_deck_store');
var PublicDeckStore = require('../../stores/public_deck_store');
var PreviewInfo = React.createClass({
  render: function () {
    var description = "No description.";
    var descriptionClass = "Empty-Description Description"
    if(this.props.deck.description) {
      description = this.props.deck.description;
      descriptionClass = "Description";
    }

    return(
      <div className="group Recap">
        <div className="Review-Grade" >
          <h4 className="Stat-Header">Description</h4>
          <div className={ descriptionClass }>{ description }</div>
        </div>

        <div className="Review-Info">
          <h4 className="Stat-Header">Info</h4>
          <ul className="Stat-List">

            <li className="Statistic">
              <p className="StatTitle">Cards</p>
              <p className="Stat">{ this.props.deck.cardTotal }</p>
              <div className="ClearSet" ></div>
            </li>
          </ul>

        </div>
      </div>
    )
  }
});

module.exports = PreviewInfo;

var React = require('react');
var Link = require('react-router').Link;
var GraphUtil = require('../graphs/graph_util');

var DeckIndexItem = React.createClass({
  render: function () {
    var grade = "New";
    if (this.props.grade) {
      grade = Math.round(this.props.grade) + "% " + GraphUtil.gradeByPercentage(this.props.grade)
    }

    return(
      <Link to={ this.props.urlFront + this.props.id }>
        <li className="Deck-Index-Item">
            <div className="Left-Side-Content" >
              <h5>{this.props.name}</h5>
              <div className="Cards-Image"></div>
            <p>{this.props.totalCards}</p>
            </div>
            <p className="Grade"
               style={
                 {color: GraphUtil.colorByPercentage(this.props.grade)}
               }>{ grade }</p>
            <div className="ClearSet" />
        </li>
        </Link>
    )
  }
});

module.exports = DeckIndexItem;

var React = require("react");
var TourStore = require('../../stores/tour_store');
var TourConstants = require('../../constants/tour_constants');

var Tour = React.createClass({
  getInitialState: function () {
    return({ stepIdx: 0, steps: this.props.steps })
  },

  componentDidMount: function () {
    // TourStore.resetTours();
    var test = TourStore;
  },

  nextCB: function () {
    this.setState({ stepIdx: this.state.stepIdx + 1 });
  },

  cancelCB: function () {
    this.setState({ stepIdx: this.state.steps.length})
  },

  tourFinished: function () {
    if (this.state.stepIdx === this.state.steps.length || TourStore.tourFinished(this.props.tourName)) {
      TourStore.checkOffTour(this.props.tourName);
      return this.queueNextTour();
    } else {
      return false;
    }
  },

  queueNextTour: function () {
    if( this.state.steps !== this.props.steps) {
      this.state.steps = this.props.steps;
      this.state.stepIdx = 0;
      return false;
    } else {
      return true;
    }
  },

  contents: function () {
    var paragraphs = this.state.steps[this.state.stepIdx]["text"].split("\n");

    return (
      <div className="contents">
        {
          paragraphs.map(function(paragraph, idx){
            return <p className="contents" key={ idx }>{ paragraph }</p>;
          })
        }
      </div>
    )
  },

  tourbox: function () {
    return(
      <div className={ "step" + this.state.stepIdx + " tour " + this.props.extraClasses}>
        { this.contents() }
        <button onClick={ this.cancelCB } className="cancel">Cancel</button>
        <button onClick={ this.nextCB } className="next">Next</button>
        <div className={"arrow " + this.state.steps[this.state.stepIdx]["arrow"]}></div>
      </div>
    )
  },

  render: function () {
    // console.log(this.tourFinished());
    if(this.tourFinished()){
      return <div></div>;
    } else {
      return this.tourbox();
    }

  }
})

module.exports = Tour;

var React = require("react");

var Tour = React.createClass({
  getInitialState: function () {
    return({ stepIdx: 0, steps: this.props.steps })
  },

  nextCB: function () {
    this.setState({ stepIdx: this.state.stepIdx + 1 });
  },

  cancelCB: function () {
    this.setState({ stepIdx: this.state.steps.length})
  },

  tourFinished: function () {
    if (this.state.stepIdx === this.state.steps.length) {
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
    if(this.tourFinished()){
      return <div></div>;
    } else {
      return this.tourbox();
    }

  }
})

module.exports = Tour;

var React = require('react');
var GraphUtil = require('./graph_util');

ReviewProgressCircle =  React.createClass({
    getInitialState: function () {
      return({firstRender: true})
    },
    componentDidMount: function() {
        this.updateCanvas();
    },
    componentDidUpdate: function() {
        this.updateCanvas();
    },
    updateCanvas: function() {
      var c = this.refs.canvas.getContext('2d');

      if(this.state.firstRender) {
        c.scale(2, 2);
        this.state.firstRender = false;
      }

      c.fillStyle = "#E5E5E5"
      c.fillRect(0,0,30,30)

      var centerX = 12;
      var centerY = 12;
      var color = "#616161"
      var radius = 10;
      var completed = this.props.completedCards;
      var total = this.props.totalCards;
      var angle = GraphUtil.angleByPercentageCompletion( completed, total);
      var xArcProgressPoint = centerX + Math.cos(angle) * radius;
      var yArcProgressPoint = centerY + Math.sin(angle) * radius;
      var absStartAngle = -0.5 * Math.PI;
      var absEndAngle =  1.5 * Math.PI;

      c.strokeStyle = color;
      c.fillStyle = color;
      c.lineWidth = 1;
      c.beginPath();
      c.moveTo(centerX, centerY - radius)
      c.lineTo(centerX, centerY)
      c.lineTo(xArcProgressPoint, yArcProgressPoint)
      c.arc(centerX, centerY,radius, angle, absEndAngle, false);
      c.fill();

      c.beginPath();
      c.arc(centerX, centerY, radius, absStartAngle, absEndAngle, false);
      c.stroke();

    },

    render: function () {
         return (
             <canvas className="Progress-Circle" ref="canvas" width={48} height={48}/>
         );
    }
});

module.exports = ReviewProgressCircle;

var React = require('react');
var GraphUtil = require('./graph_util');

RecapCanvas =  React.createClass({
    componentDidMount: function() {
        this.updateCanvas();
    },
    // componentDidUpdate: function() {
    //     this.updateCanvas();
    // },
    updateCanvas: function() {
      var c = this.refs.canvas.getContext('2d');


      var percentage = this.props.percentage;
      var angle = (2 * Math.PI * percentage / 100) - 0.5 * Math.PI;
      var centerX = 100;
      var centerY = 100;
      var color = GraphUtil.colorByPercentage(percentage);
      var grade = GraphUtil.gradeByPercentage(percentage);

      c.scale(3, 3)

      c.strokeStyle = "#F5F5F5";
      c.lineWidth = 15;
      c.beginPath();
      c.arc(centerX, centerY, 57, -0.5 * Math.PI, 1.5 * Math.PI, false);
      c.stroke();

      c.strokeStyle = color;
      c.lineWidth = 13;
      c.beginPath();
      c.arc(centerX, centerY, 57, -0.5 * Math.PI, angle, false);
      c.stroke();

      c.fillStyle = color;
      c.font = "30px Sans Serif";
      c.fillText(grade, centerX - 10, centerY + 25);

      c.font = "22px Sans Serif";
      c.fillText(""+ percentage + "%", centerX - 17, centerY - 10);
    },
    render: function () {
         return (
             <canvas ref="canvas" width={600} height={600}/>
         );
    }
});

module.exports = RecapCanvas;

var React = require('react');

var colorByPercentage = function (percentage) {
  if (percentage < 50) { return "rgb(232, 11, 2)"; }
  if (percentage < 60) { return "rgb(232, 52, 94)"; }
  if (percentage < 70) { return "rgb(232, 102, 78)"; }
  if (percentage < 80) { return "rgb(255, 210, 85)"; }
  if (percentage < 90) { return "rgb(78, 164, 232)"; }
  if (percentage <= 100) { return "rgb(72, 255, 111)"; }
}

var gradeByPercentage = function (percentage) {
  if (percentage < 50) { return "F"; }
  if (percentage < 60) { return "E"; }
  if (percentage < 70) { return "D"; }
  if (percentage < 80) { return "C"; }
  if (percentage < 90) { return "B"; }
  if (percentage <= 100) { return "A"; }
}

RecapCanvas = class CanvasComponent extends React.Component {
    componentDidMount() {
        this.updateCanvas();
    },
    componentDidUpdate() {
        this.updateCanvas();
    },
    updateCanvas() {
      const c = this.refs.canvas.getContext('2d');
        // c.fillStyle = "red";
        // c.fillRect(0,0, 300, 300);
        // // draw children “components”
        // c.fillStyle = "blue"
        // c.font = "30px Sans Serif";
        // c.fillText("TEST", 5, 5);

      var percentage = this.props.percentage;
      var angle = (2 * Math.PI * percentage / 100) - 0.5 * Math.PI;
      var centerX = 100;
      var centerY = 100;
      var color = colorByPercentage(percentage)
      var grade = gradeByPercentage(percentage)

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
    render() {
         return (
             <canvas ref="canvas" width={200} height={200}/>
         );
    }
}

module.exports = RecapCanvas;

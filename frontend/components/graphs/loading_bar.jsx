var React = require('react');
var GraphUtil = require('./graph_util');

ReviewProgressCircle =  React.createClass({
    getInitialState: function () {
      return({theta: 0})
    },
    componentDidMount: function() {
      var self = this;
        this.state.drawToken = setInterval(function () {
          self.draw()
        }, 20)
    },

    componentWillUnmount: function() {
      this.state.theta = 0;
      clearInterval(this.state.drawToken);
    },

    // componentDidUpdate: function() {
    //     this.updateCanvas();
    // },
    draw: function() {
      var c = this.refs.canvas.getContext('2d');
      this.state.theta += 0.1;

      c.clearRect(0, 0, 400, 400)

      c.globalAlpha = 0.8;
      c.fillStyle = "black"
      GraphUtil.roundedSquare(c, 5,15,370,385)

      c.translate(190,200)
      c.rotate(this.state.theta)
      c.strokeStyle = "#25A3FC";
      c.lineWidth = 15;

      var incrementTotal = 60
      for(var i = 0; i < incrementTotal; i++) {
        c.globalAlpha = (1/incrementTotal) * i
        c.beginPath();
        c.arc(
          0,
          0,
          100,
          (i + GraphUtil.loadingOverlapOffset(i))/(incrementTotal / 2) * Math.PI,
          (i + 1)/(incrementTotal / 2) * Math.PI,
          false
        );
        c.stroke();
      }

      c.globalAlpha = 1
      c.rotate(-this.state.theta)
      c.translate(-190,-200)
    },

    render: function () {
         return (
             <canvas ref="canvas" width={380} height={380}/>
         );
    }
});

module.exports = ReviewProgressCircle;

module.exports = {
  colorByPercentage: function (percentage, opacity) {
    if(opacity) {
      if (percentage == 0) { return "rgba(56, 38, 134, " + opacity + ")"}
      if (percentage < 50) { return "rgba(232, 11, 2, " + opacity + ")"}
      if (percentage < 60) { return "rgba(232, 52, 94, " + opacity + ")"}
      if (percentage < 70) { return "rgba(232, 102, 78, " + opacity + ")"}
      if (percentage < 80) { return "rgba(255, 210, 85, " + opacity + ")"}
      if (percentage < 90) { return "rgba(78, 164, 232, " + opacity + ")"}
      if (percentage <= 100) { return "rgba(72, 255, 111, " + opacity + ")"}
    }
    if (percentage == 0) { return "rgb(56, 38, 134)"}
    if (percentage < 50) { return "rgb(232, 11, 2)"; }
    if (percentage < 60) { return "rgb(232, 52, 94)"; }
    if (percentage < 70) { return "rgb(232, 102, 78)"; }
    if (percentage < 80) { return "rgb(255, 210, 85)"; }
    if (percentage < 90) { return "rgb(78, 164, 232)"; }
    if (percentage <= 100) { return "rgb(72, 255, 111)"; }
  },

  gradeByPercentage: function (percentage) {
    if (percentage == 0) { return "New"}
    if (percentage < 50) { return "F"; }
    if (percentage < 60) { return "E"; }
    if (percentage < 70) { return "D"; }
    if (percentage < 80) { return "C"; }
    if (percentage < 90) { return "B"; }
    if (percentage <= 100) { return "A"; }
  },

  angleByPercentageCompletion: function (cardsFinished, total) {
    return (Math.PI * ( 2 * (cardsFinished / total) - 0.5 ))
  },

  loadingOverlapOffset: function (rotateIdx) {
         if( rotateIdx < 15) { return  0    ; }
    else if (rotateIdx < 30) { return -0.01 ; }
    else if (rotateIdx < 45) { return -0.018; }
    else if (rotateIdx < 60) { return -0.035; }
  },

  roundedSquare: function (c, x, y, side) {
    c.beginPath();
    c.moveTo(x + side / 10, y + side / 10)
    c.arc(x + side / 10, y + side / 10, side / 10,  Math.PI, 1.5 * Math.PI, false);

    c.lineTo(x + 9 * side / 10, y)
    c.lineTo(x + 9 * side / 10, y + side / 10)
    c.arc(x + 9 * side / 10, y + side / 10, side / 10, 1.5 * Math.PI, 2 * Math.PI, false);

    c.lineTo(x + side , y + side * 9 / 10)
    c.lineTo(x + 9 * side / 10, y + side * 9 / 10)
    c.arc(x + 9 * side / 10, y + side * 9 / 10, side / 10, 2 * Math.PI, 2.5 * Math.PI, false);

    c.lineTo(x + side / 10, y + side);
    c.lineTo(x + side / 10 , y + side * 9 / 10);
    c.arc(x + side / 10, y + side * 9 / 10, side / 10, 2.5 * Math.PI, 3 * Math.PI, false);

    c.lineTo(x, y + side / 10)
    c.fill();
  }
}

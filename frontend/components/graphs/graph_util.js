module.exports = {
  colorByPercentage: function (percentage) {
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
  }
}

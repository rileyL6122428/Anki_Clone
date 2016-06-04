var Util =  {
  shuffle: function (cards) {
    var cardsWithSeeds = {};
    for (var i = 0; i < cards.length; i++) {
      cardsWithSeeds[Math.random()] = cards[i];
    }

    var orderedSeeds = Util.quickSort(Object.keys(cardsWithSeeds));
    var shuffledCards = [];
    for (var i = 0; i < orderedSeeds.length; i++) {
      var nextCard = cardsWithSeeds[orderedSeeds[i]];

      shuffledCards.push(nextCard)
    }

    return shuffledCards;
  },

  quickSort: function (arr) {
    if(arr.length <= 1) { return arr; }

    var pivot = arr[0];
    var lessThanPivot = [];
    var greaterThanPivot = [];

    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        lessThanPivot.push(arr[i]);
      } else {
        greaterThanPivot.push(arr[i]);
      }
    }

    return (Util.quickSort(lessThanPivot).
                                    concat(pivot).
                                    concat(Util.quickSort(greaterThanPivot)));
  }
}

module.exports = Util;

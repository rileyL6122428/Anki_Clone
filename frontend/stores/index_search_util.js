module.exports =  {
  search: function(collection, attribute, searchInput ) {
    if(searchInput === "") { return this.arrayCollection(collection) }
    var matches = [];

    for(var key in collection) {
      var element = collection[key]
      var elementAttribute =　element[attribute].toLowerCase();
      var lcSearchInput = searchInput.toLowerCase()

      if(elementAttribute.match(lcSearchInput)) { matches.push(element); }
    }

    return matches;
  },

  arrayCollection: function (collection) {
    var arrCollection = []

    for(var key in collection) {
      arrCollection.push(collection[key])
    }

    return arrCollection
  }
};

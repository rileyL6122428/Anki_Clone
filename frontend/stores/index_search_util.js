module.exports =  {
  search: function(collection, attribute, searchInput ) {
    var matches = [];
    // debugger
    for(var key in collection) {
      var element =　collection[key];

      if(element[attribute].startsWith(searchInput)) { matches.push(element); }
    }

    return matches;
  }
};

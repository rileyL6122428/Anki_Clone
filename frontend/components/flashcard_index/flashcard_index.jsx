var React = require('react');
var SearchBar = require('./flashcards_search_bar');
var List = require('./list');
var Link = require('react-router').Link;

var FlashcardIndex = React.createClass({


  render: function(){

    return(
      <div className="Parent-Component">
        <h1>
          <Link to={ "/decks/" + this.props.params.id }>Back</Link>
          <p>Cards</p>
          <Link to={ "/decks/" + this.props.params.id + "/new-flashcards"}>New</Link>
        </h1>
        <SearchBar />
        <div className="Overflow-Test">
          <List deckId={this.props.params.id}/>
        </div>

      </div>
    );
  }
});

module.exports = FlashcardIndex;

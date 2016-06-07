var React = require('react');

var Preview = require('../flashcard_show/preview');

var PreviewList = React.createClass({



  render: function () {
    var cards = this.props.deck.cardPreview;
    var deckName = this.props.deck.name


    return(
      <div className="">
        <h2>{ deckName }</h2>
          <div className="Preview-List">
              {
                cards.map(function(card) {
                  return(<Preview key={ card.id } card={ card } />);
                })
              }
          </div>
      </div>
    );
  }
});

module.exports = PreviewList;

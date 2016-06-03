var React = require('react');
var FlashcardActions = require('../../actions/flashcard_actions');
var FlashcardStore = require('../../stores/flashcard_store');
var Preview = require('../flashcard_show/preview');

var Form = React.createClass({

  getInitialState: function () {
    return({ front: "", back: "" , cardSaved: false});
  },

  componentDidMount: function () {
    this.eventToken = FlashcardStore.addListener(this.flashcardStoreCB);
  },

  flashcardStoreCB: function () {
    this.setState({ front: "", back: "" , cardSaved: true });
    setTimeout(this.turnOffFlash, 3000);
  },

  turnOffFlash: function () {
    this.setState({ cardSaved: false })
  },

  componentWillUnmount: function () {
    this.eventToken.remove();
  },

  changeFront: function (e) {
    var newFront = e.target.value
    this.setState({ front: newFront })
  },

  changeBack: function (e) {
    var newBack = e.target.value
    this.setState({ back: newBack })
  },

  submitCB: function (e) {
    e.preventDefault();
    FlashcardActions.createFlashcard({
        front: this.state.front,
        back: this.state.back
      }, this.props.deckId
    );

  },

  render: function () {

    var flash = "";

    if (this.state.cardSaved) {
      flash = <div className="Flash">Card Saved</div>
    }

    return(
      <div className="Form">
        { flash }
        <h4>Info</h4>
        <form onSubmit={this.submitCB}>
          <label>Front
            <br/>
            <input type="text" onChange={this.changeFront} className="FrontInput" />
          </label>
          <br/>

          <label>Back
            <br/>
            <input type="text" onChange={this.changeBack} className="BackInput" />
          </label>
          <br/>

          <input type="submit" value="Save" className="Save" />

        </form>

        <Preview card={this.state}/>

      </div>
    )
  }
});

module.exports = Form;

var React = require('react');
var FlashcardActions = require('../../actions/flashcard_actions');
var FlashcardStore = require('../../stores/flashcard_store');
var NewPreview = require('../edit_flashcard/edit_preview');

var Form = React.createClass({

  getInitialState: function () {
    return({ front: "", back: "" , cardSaved: false});
  },

  componentDidMount: function () {
    this.eventToken = FlashcardStore.addListener(this.flashcardStoreCB);
  },

  flashcardStoreCB: function () {
    this.setState({ front: "", back: "" , cardSaved: true });
    this.state.timeOutId = setTimeout(this.turnOffFlash, 3000);
  },

  turnOffFlash: function () {
    this.setState({ cardSaved: false })
  },

  componentWillUnmount: function () {
    this.eventToken.remove();
    if(this.state.timeOutId) {
      clearTimeout(this.state.timeOutId)
    }
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
    this.setState({front: "", back: ""})
  },

  render: function () {

    var flash = "";

    if (this.state.cardSaved) {
      flash = <div className="Flash">Card Saved</div>
    }

    return(
      <div className="Form">
        <div className="Flash">{ flash }</div>
        <form onSubmit={this.submitCB}>
          <h4>Front</h4>
          <label>
            <textarea type="text"
                      onChange={this.changeFront}
                      className="FrontInput"
                      value={this.state.front} />
          </label>

          <h4>Back</h4>
          <label>
            <textarea type="text"
                      onChange={this.changeBack}
                      className="BackInput"
                      value={this.state.back}/>
          </label>
          <br/>

          <input type="submit" value="Save" className="Save" />

        </form>

        <NewPreview card={this.state}/>
        <div className="ClearSet" />
      </div>
    )
  }
});

module.exports = Form;

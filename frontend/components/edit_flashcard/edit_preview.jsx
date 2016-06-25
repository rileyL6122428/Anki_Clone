var React = require('react');

var EditPreview = React.createClass({



  render: function () {

    return(
      <div className={ "Preview" }>
        <div className="List-Center">
          <div className="Section">
            <div className="Front">
              <div className="Preview-Text">
                { this.props.card.front }
              </div>
            </div>
          </div>
          <div className="Preview-Divider" />
          <div className="Section P-Back">
            <div className="Back">
              <div className="Preview-Text">
                { this.props.card.back }
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
});

module.exports = EditPreview;

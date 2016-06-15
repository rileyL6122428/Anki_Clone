var React = require('react');

var Preview = React.createClass({
  render: function () {

    return(
      <div className="Preview">
        <div className="List-Center">
          <p>
            <div className="Front">{ this.props.card.front }</div>
          </p>
          <div className="Preview-Divider" />
          <p className="P-Back">
            <div className="Back">{ this.props.card.back }</div>
          </p>
        </div>
      </div>
    );
  }
});

module.exports = Preview;


// <div className="Preview">
//   <div className="List-Center">
//     <p>
//       <div className="Front">{ this.props.card.front }</div>
//     </p>
//     <div className="Preview-Divider" />
//     <p className="P-Back">
//       <div className="Back">{ this.props.card.back }</div>
//     </p>
//   </div>
// </div>

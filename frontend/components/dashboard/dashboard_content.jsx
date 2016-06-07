var React = require('react');
var DashboardInfo = require('./dashboard_info');
var DashboardDisplay = require('./dashboard_display');
var ReviewStore = require('../../stores/review_store');
var ReviewActions = require('../../actions/review_actions');

var DashboardContent = React.createClass({

  getInitialState: function () {
    return({
      dayTotals: ReviewStore.allBySortedWeekDay(),
      dayLabels: ReviewStore.dayLabels(),
      lifeTotal: ReviewStore.lifeTotal()
    });
  },

  componentDidMount: function () {
    this.listenerToken = ReviewStore.addListener(this.reviewStoreCB);
    ReviewActions.fetchReviews();
  },

  reviewStoreCB: function () {
    this.setState({
      dayTotals: ReviewStore.allBySortedWeekDay(),
      lifeTotal: ReviewStore.lifeTotal()
    });
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  render: function () {
    return(
      <div className="Content">
        <DashboardInfo dayTotals={ this.state.dayTotals }
                       lifeTotal = { this.state.lifeTotal} />
        <DashboardDisplay dayTotals={ this.state.dayTotals }
                          dayLabels={ this.state.dayLabels}/>
        <div className="ClearSet" />
      </div>
    );
  }
});

module.exports = DashboardContent;

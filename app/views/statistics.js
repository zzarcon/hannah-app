import Ember from "ember";

var dataset = {
  label: "Followers growth",
  fillColor: "rgba(151,187,205,0.2)",
  strokeColor: "rgba(151,187,205,1)",
  pointColor: "rgba(151,187,205,1)",
  pointStrokeColor: "#fff",
  pointHighlightFill: "#fff",
  pointHighlightStroke: "rgba(151,187,205,1)"
};

export default Ember.View.extend({
  elementId: 'statistics-section',
  canvasHeight: 300,

  canvasWidth: function() {
    return $(window).width() - 200;
  }.property(),

  data: function() {
    var user = this.get('session.user')
    var initFollowers = user.get('initialCounts.followers');
    var currentFollowers = user.get('currentCounts.followers');
    var initDate = moment(user.get('registeredAt')).format('LL');
    var now = moment().format('LL');

    dataset.data = [initFollowers, currentFollowers];

    return {
      labels: [initDate, now],
      datasets: [dataset]
    };
  }.property(),

  setup: function() {
    var ctx = document.getElementById("statistics").getContext("2d");
    var myNewChart = new Chart(ctx).Line(this.get('data'));

  }.on('didInsertElement')
});
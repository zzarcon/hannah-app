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
  displayStatsLimit: 20,

  canvasWidth: function() {
    return $(window).width() - 200;
  }.property(),

  data: function() {
    var stats = this.get('controller').slice(0, this.get('displayStatsLimit'));
    var labels = stats.map(function(stat) {
      return moment(stat.get('date')).format('DD/MM/YY');
    });

    dataset.data = stats.mapBy('stat');

    return {
      labels: labels,
      datasets: [dataset]
    };
  }.property(),

  options: function() {
    return {
      responsive: true,
      tooltipTemplate: "<%= value %>"
    };
  }.property(),

  setup: function() {
    var ctx = document.getElementById("statistics").getContext("2d");

    new Chart(ctx).Line(this.get('data'), this.get('options'));
  }.on('didInsertElement')
});
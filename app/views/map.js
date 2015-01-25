//TODO Put this in config
L.Icon.Default.imagePath = 'images';

var markerLayer = EmberLeaflet.MarkerLayer.extend(EmberLeaflet.DraggableMixin, EmberLeaflet.PopupMixin, {
  dragend: function() {
    this.get('layer._latlng')
  }
});

var marker = EmberLeaflet.MarkerCollectionLayer.extend({
  events: ['click'],
  itemLayerClass: markerLayer,
  content: function() {
    var lat = this.get('controller.latitude');
    var lon = this.get('controller.longitude');

    return [{location: L.latLng(lat, lon)}];
  }.property('controller.latitude', 'controller.longitude')
});

export default EmberLeaflet.MapView.extend({
  zoom: 15,
  options: {maxZoom: 19, minZoom: 0},
  events: ['click'],
  childLayers: [EmberLeaflet.DefaultTileLayer, marker],
  latitude: 555555,
  longitude: 555555,

  center: function() {
    return L.latLng(this.get('latitude'), this.get('longitude'));
  }.property('latitude', 'longitude')
});

import DS from 'ember-data';
import Ember from 'ember';

//TODO: Find better place to put this
DS.Transform.reopen({
  camelizeKeys: function(json) {
    var camelizedJson = Array.isArray(json) ? [] : {};
    var camelizedKey;
    var currentObject;
    var camelizedArray;

    for (var key in json) {
      if (json.hasOwnProperty(key)) {
        camelizedKey = key.camelize();
        currentObject = json[key];

        if (Array.isArray(currentObject)) {
          camelizedArray = [];

          for (var i = 0; i < currentObject.length; i++) {
            camelizedArray.push(this.camelizeKeys(currentObject[i]));
          }

          camelizedJson[camelizedKey] = camelizedArray;
        } else if (typeof currentObject === "object") {
          camelizedJson[camelizedKey] = this.camelizeKeys(currentObject);
        } else {
          camelizedJson[camelizedKey] = currentObject;
        }
      }
    }
    return camelizedJson;
  },

  decamelizeKeys: function(json) {
    var decamelizedJson = {};
    var decamelizedKey;
    var currentObject;
    var decamelizedArray;

    for (var key in json) {
      if (json.hasOwnProperty(key)) {
        decamelizedKey = key.decamelize();
        currentObject = json[key];

        if (Array.isArray(currentObject)) {
          decamelizedArray = [];

          for (var i = 0; i < currentObject.length; i++) {
            decamelizedArray.push(this.decamelizeKeys(currentObject[i]));
          }

          decamelizedJson[decamelizedKey] = decamelizedArray;
        } else if (typeof currentObject === "object") {
          decamelizedJson[decamelizedKey] = this.decamelizeKeys(currentObject);
        } else {
          decamelizedJson[decamelizedKey] = currentObject;
        }
      }
    }
    return decamelizedJson;
  }
});

export default DS.Transform.extend({
  serialize: function(object) {
    var v, ret = [];
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        v = object[key];
        if (v === 'toString') {
          continue;
        } // ignore useless items
        if (Ember.typeOf(v) === 'function') {
          continue;
        }
        ret.push(key);
      }
    }

    return object && this.decamelizeKeys(object.getProperties(ret));
  },

  deserialize: function(json) {
    json = typeof json === "object" ? json : {};

    return Ember.Object.create(this.camelizeKeys(json));
  }
});
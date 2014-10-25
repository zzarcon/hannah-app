/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.host = 'http://localhost:3000';
    ENV.maximumLikes = 90;
  }

  if (environment === 'production') {
    ENV.host = 'http://media-gram.herokuapp.com';
    ENV.maximumLikes = 95;
  }

  return ENV;
};

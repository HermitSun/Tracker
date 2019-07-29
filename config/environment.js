'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'tracker',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV.contentSecurityPolicy = {
    // Deny everything by default
    'default-src': "'none'",

    // Allow scripts at
    'script-src': ["'self'"],

    // Allow fonts to be loaded from
    'font-src': ["'self'"],

    // Allow data (xhr/websocket) from
    'connect-src': ["'self'", 'https://bnr-tracker-api.herokuapp.com'],

    // Allow images from the origin itself (i.e. current domain)
    'img-src': "'self'",

    // Allow CSS loaded from
    'style-src': ["'self'"],

    // Omit `media-src` from policy
    // Browser will fallback to default-src for media resources (which is 'none', see above)
    'media-src': null
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};

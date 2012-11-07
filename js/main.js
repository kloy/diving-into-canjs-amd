require.config({
  // [RequireJS](http://requirejs.org/) 2.0+ plus has error callbacks (errbacks)
  // which provide per-require error handling. To utilize this feature
  // enforceDefine must be enabled and non-AMD dependencies must be shimmed.
  enforceDefine: true,

  baseUrl: "./js",

  // paths
  paths: {
    // jQuery
    jquery: '../components/jquery/jquery',
    can: './can.jquery',
    fixture: './can.fixture'
  },

  // shim underscore(lodash) & backbone (cause we use the non AMD versions here)
  shim: {
    'can': {
      deps: ['jquery']
    },
    'fixture': {
      deps: ['can'],
      exports: 'can.fixture'
    }
  }
});

// kickoff app
define(['./app'], function () {});


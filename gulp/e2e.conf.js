// config for protractor
var _ = require('lodash');

var config = {
  allScriptsTimeout: 11000,

  rootElement: '.rootElement',

  specs: [
    '*.e2e.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:3000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
    showColors: true,
    isVerbose: true,
    includeStackTrace: true
  }

};

// If this is running on [Travis](http://travis-ci.org) then we add additional details to run the tests on the
// [Sauce labs](https://saucelabs.com/opensource/travis) cloud.
if (process.env.TRAVIS) {
  config.seleniumAddress = 'http://localhost:4445/wd/hub';
  // config.sauceUser = process.env.SAUCE_USERNAME;
  // config.sauceKey = process.env.SAUCE_ACCESS_KEY;
  config.capabilities = _.extend(config.capabilities, {
    'username': process.env.SAUCE_USERNAME,
    'accessKey': process.env.SAUCE_ACCESS_KEY,
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name': 'Melange E2E Tests'
  });
}

exports.config = config;
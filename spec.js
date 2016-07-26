var testsContext;

require('babel-core/polyfill');
require('./vendor/angular.src');
require('angular-mocks');

require('./src/app.js')
var test = 'ok'

debugger;

testsContext = require.context('./src', true, /_spec\.js$/);
testsContext.keys().forEach(testsContext);

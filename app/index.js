
'use strict';

//require('angular-router');
var ngRoute = require("angular-route");

module.exports = angular.module('tanstestapp', [
    'ngRoute'
]);

require('./app.routes.js');
require('./shared');
require('./components');
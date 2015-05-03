'use strict';

module.exports = angular.module('tanstestapp', [
    'ngRoute'
]);

require('./app.routes.js');
require('./shared');
require('./components');
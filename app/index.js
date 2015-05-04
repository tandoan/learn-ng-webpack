'use strict';

require('./app.routes.js');
require('./shared');
require('./components');

module.exports = angular.module('tanstestapp', [
    'ngRoute'
]);


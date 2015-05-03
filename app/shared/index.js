'use strict';

var appModule = require('../index');
var app = require('angular').module(appModule.name);

app.directive('spinner', require('./spinner'));
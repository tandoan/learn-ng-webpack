'use strict';

'use strict';

//require('./shared/spinner/index');
var appModule = require('../index');
var app = require('angular').module(appModule.name);



app.controller('landingPageController', require('./landingPage'));

//require('./landingPage');
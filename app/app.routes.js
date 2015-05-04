'use strict';

var appModule = require('./index');

appModule.config(function ($routeProvider) {


    $routeProvider.when('/', {
        template: require('./components/home/home.html')
    });

    $routeProvider.when('/home', {
        template: require('./components/home/home.html'),
        controller: require('./components/home/')
    });

    $routeProvider.when('/landingPage', {
        template: require('./components/landingPage/landingPage.html')
    });

    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo: '/home'});
});
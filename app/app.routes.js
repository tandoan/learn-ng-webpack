'use strict';

var appModule = require('./index');

appModule.config(function($routeProvider){
    $routeProvider.when('/landingPage',{templateUrl: 'components/landingPage.html'});
    //$routeProvider.when('landingPage',{controller: 'landingPageController'});
    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/home'});

});
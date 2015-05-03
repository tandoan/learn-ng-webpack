'use strict';

var appModule = require('./index');

appModule.config(function($routeProvider){
    //$routeProvider.when('/landingPage',{templateUrl: 'components/landingPage.html'});

    $routeProvider.when('/', {
        //templateUrl: './components/home/home.html',
        //controller: 'homeController'
        controller: 'landingPageController'

    });

    $routeProvider.when('landingPage',{
        //templateUrl: './components/landingPage/landingPage.html',
        controller: 'landingPageController'
    });
    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/home'});

});
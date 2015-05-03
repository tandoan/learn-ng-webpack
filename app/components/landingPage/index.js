'use strict';

module.exports = function($scope){
    $scope.allTheThings = [
        'dogs',
        'cats',
        'excited',
        'double excited'
    ];
    console.log($scope.allTheThings, 'all the things!')
};
'use strict';

require('./spinner.css');
module.exports = function(){
    return {
        template: require('./spinner.html'),
        scope: {
            size: '@'
        },
        restrict: 'E'
    };
};
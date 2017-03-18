var myApp = angular.module('myApp', []);

myApp.controller('thecontroller', function($scope){

});

var parsing = function(fname, lname, age) {
    return "vikash";
}

console.log(angular.injector().annotate(parsing));


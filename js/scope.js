var myApp = angular.module('myApp', []);

myApp.controller('thecontroller', function($scope){
    $scope.name = 'vikash';
    $scope.getname = function() {
        return 'vikash';
    }

    $scope.name;
    $scope.getname();
    console.log($scope);




});
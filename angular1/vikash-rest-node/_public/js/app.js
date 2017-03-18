let app = angular.module('myapp', []);

userData = {
    email : 'vik@vikash.com',
    password : '1231234'
};

app.controller('mycontrol', ($scope, $http) => {
    $scope.register = () => {
        $scope.response = null; // define a variable to hold the response data after success
        // $http.post('https://tripshire1.herokuapp.com/v1/api/admin/login', userData).then((res) => {
        $http.post('localhost:5000/', userData).then((res) => {
            $scope.response = res.data;
            console.log($scope.response);
        }, (err) => {
            console.error(err);
        });
    }
});
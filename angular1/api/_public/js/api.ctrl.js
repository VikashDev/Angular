apiApp.controller('apiCtrl', ($scope, $http, dataFactory) => {

		$scope.data = '';
		$scope.cards = null;

		dataFactory.apiData().then((res) => {
			$scope.cards = res.data;
			console.log($scope.cards);
		}, (err) => {
			console.log(err); 
		});

		console.log($scope.cards)

});
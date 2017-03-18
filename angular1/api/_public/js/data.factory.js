(function(){
	angular.module('apiApp').factory('dataFactory', function($http){
		
		let apiData = function() {
			return $http.get('http://tripshire1.herokuapp.com/feeds');
		};

		return {
			apiData : apiData
		}
	})
})();
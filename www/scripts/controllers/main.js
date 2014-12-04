angular.module('app').controller('main', function ($scope, $http, currencies) {
	$scope.openLeft = function () {
		$scope.sideMenuController.toggleLeft();
	};
	
	$scope.menuShowing = function () {
		return !$scope.sideMenuController.isOpen();
	};
	
	$scope.selectCurrency = function(currency) {
		if($scope.selectedCurrency() !== currency) {
			currencies.selectedCurrency = currency;
			$scope.makeConversion($scope.amount);
		}
		else {
			currencies.selectedCurrency = null;
			$scope.result = '';
		};
	};
	
	$scope.makeConversion = function (amount) {
		$scope.amount = amount;
		if((!isNaN(amount) && amount !== '') && $scope.selectedCurrency()) {
			$scope.result = currencies.getConversion(amount, $scope.selectedCurrency());
		}
		else {
			$scope.result = '';
		};
	};
	
	$scope.$watch('currencies', function () {
		$scope.makeConversion($scope.amount);
	}, true);
	
	$scope.selectedCurrency = function () {
		return currencies.selectedCurrency;
	};
	
	$scope.getBaseCountryCode = function () {
		return currencies.baseCurrency.country_code;
	};
	
	$scope.currencies = currencies.list;
});
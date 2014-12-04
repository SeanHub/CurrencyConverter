angular.module('app').controller('baseCurrencyPopup', function ($scope, popupInstance, currencies) {
	$scope.closePopup = function () {
		popupInstance.close();
	};

	$scope.selectBaseCurrency = function (currency) {
		currencies.baseCurrency = currency;
		currencies.updateCurrencies();
		currencies.selectedCurrency = null;
		$scope.closePopup();
	};

	$scope.currencies = currencies.list;
});